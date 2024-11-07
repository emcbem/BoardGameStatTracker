using Microsoft.AspNetCore.Components;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using server.bgst.Data;
using server.bgst.DTOs;
using server.bgst.Requests.GetRequests;

namespace server.bgst.Services;

public class BoardGameService
{
    private IDbContextFactory<BgstContext> dbContextFactory {get; set;}

    public BoardGameService(IDbContextFactory<BgstContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<List<BoardGameDto>> GetTop50Games()
    {
        using var context = await dbContextFactory.CreateDbContextAsync();
        return await context.BoardGames.Take(50).Select(x => x.ToBoardGameDto()).ToListAsync();
    }

    public async Task<List<BoardGameDto>> SearchGames(SearchRequest searchRequest)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();
        
        if(searchRequest.MaxPlayers == 0)
        {
            searchRequest.MaxPlayers = int.MaxValue;
        }

        if(searchRequest.MaxPlayTime == 0)
        {
            searchRequest.MaxPlayTime = int.MaxValue;
        }

        var boardGameDtos = await context.BoardGames
            .Where(x => 
            x.Title.ToLower().Contains(searchRequest.Name.ToLower()) && 
            x.MaxEstimatedPlayTimeMinutes <= searchRequest.MaxPlayTime &&
            x.MinEstimatedPlayTimeMinutes >= searchRequest.MinPlayTime &&
            x.MinPlayers >= searchRequest.MinPlayers &&
            x.MaxPlayers <= searchRequest.MaxPlayers
            ).Skip(searchRequest.Page * searchRequest.PageCount)
            .Take(searchRequest.PageCount)
            .Select(x => x.ToBoardGameDto())
            .ToListAsync();

        return boardGameDtos;
    }
}