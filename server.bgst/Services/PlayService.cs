using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.bgst.Data;
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
}