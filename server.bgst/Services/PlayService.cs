using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.bgst.Data;
using server.bgst.DTOs;
using server.bgst.Requests;

namespace server.bgst.Services;

public class PlayService{
    private readonly IDbContextFactory<BgstContext> factory;

    public PlayService(IDbContextFactory<BgstContext> factory)
    {
        this.factory = factory;
    }

    public async Task<bool> PlayGame([FromBody] PlayGameRequest request)
    {
        using var context = await factory.CreateDbContextAsync();

        var playedGame = new PlayedGame()
        {
            TimeElapsedMinutes = request.TimeElapsedMinutes,
            BoardGameId = request.BoardGameId,
            DatePlayed = request.DatePlayed?.ToUniversalTime(),
        };

        context.PlayedGames.Add(playedGame);
        await context.SaveChangesAsync();

        List<UserPlayedGame>? userPlayedGames = request?.players?.Select(p => new UserPlayedGame(){
            BgstUserId = p.UserId == 0? null : p.UserId,
            EndRank = p.Rank,
            PlayedGameId = playedGame.Id,
            Points = p.Points,
            Username = p.Name,
        }).ToList();

        if(userPlayedGames is not null)
        {
            context.UserPlayedGames.AddRange(userPlayedGames);
            await context.SaveChangesAsync();
        }

        return true;
    }

    public async Task<BoardGameStats?> GetUserStatsForGame(int userId, int boardGameId)
    {
        using var context = await factory.CreateDbContextAsync();

        var games = await context.BoardGames
            .Include(x => x.PlayedGames)
            .ThenInclude(x => x.UserPlayedGames.Where(y => y.BgstUserId == userId))
            .Where(x => x.Id == boardGameId)
            .FirstOrDefaultAsync();

        BoardGameStats stats = new BoardGameStats(){
            BoardGame = games?.ToBoardGameDto(),
            AverageRank = games?.PlayedGames?.SelectMany(x => x.UserPlayedGames)?.Select(x => x.EndRank).Average(),
            AverageScore = games?.PlayedGames?.SelectMany(x => x.UserPlayedGames)?.Select(x => x.Points).Average(),
            PlayedGames = games?.PlayedGames?.SelectMany(x => x.UserPlayedGames)?.Select(x => {
                return x.ToPlayedGameDto();
            }).ToList(),
            TimesPlayed = games?.PlayedGames?.SelectMany(x => x.UserPlayedGames)?.Count()
        };

        return stats;
    }
}