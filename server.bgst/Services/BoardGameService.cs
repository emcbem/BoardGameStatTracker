using Microsoft.AspNetCore.Components;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using server.bgst.Data;
using server.bgst.DTOs;
using server.bgst.Logic;
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

    public async Task<Page<BoardGameDto>> SearchGames(SearchRequest searchRequest)
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
            x.Title.ToLower().Contains(searchRequest.Name.ToLower())).ToListAsync();
            
        var filteredGames = BoardGameFilterer.FilterOnPlayers(boardGameDtos, searchRequest.MinPlayers, searchRequest.MaxPlayers);
        filteredGames = BoardGameFilterer.FilterOnPlayTime(filteredGames, searchRequest.MinPlayTime, searchRequest.MaxPlayTime);
        
        var totalCount = filteredGames.Count();

        IOrderedEnumerable<BoardGame> orderedGames;

        switch (searchRequest.Order)
        {
            //A-Z
            case 0:
            default:
                 orderedGames = filteredGames.OrderBy(y => y.Title);
                 break;
            //Z-A
            case 1:
                orderedGames = filteredGames.OrderByDescending(y => y.Title);
                break;
            //Recent    
            case 2:
                orderedGames = filteredGames.OrderByDescending(y => y.YearPublished);
                break;
        }

        var boardGames = orderedGames!
            .Skip(searchRequest.Page * searchRequest.PageCount)
            .Take(searchRequest.PageCount)
            .Select(x => x.ToBoardGameDto())
            .ToList();
        
        var itemsLeft = totalCount - (searchRequest.Page + 1) * searchRequest.PageCount;

        var hasNextPage = !(itemsLeft <= 0);

        return new Page<BoardGameDto>(){
            pageNumber = searchRequest.Page,
            data = boardGames,
            hasNextPage = hasNextPage,
            totalCount = totalCount
        };
    }

    public async Task<BoardGameDto?> GetBoardGameById(int id){
        using var context = await dbContextFactory.CreateDbContextAsync();

        return (await context.BoardGames.FirstOrDefaultAsync(x => x.Id == id))?.ToBoardGameDto() ?? null;
    }

    public async Task UploadGamesFromCsv()
    {
        var games = BoardGameCsvParser.ParseBoardGamesFromCsv();

        using var context = await dbContextFactory.CreateDbContextAsync();

        context.AddRange(games);

        await context.SaveChangesAsync();
    }
}