using Microsoft.AspNetCore.Mvc;
using server.bgst.Data;
using server.bgst.DTOs;
using server.bgst.Requests.GetRequests;
using server.bgst.Services;

namespace server.bgst.Controllers;

[ApiController]
[Route("[controller]")]
public class BoardGameController: Controller
{
    private BoardGameService boardGameService { get; set; }

    public BoardGameController(BoardGameService boardGameService)
    {
        this.boardGameService = boardGameService;
    }


    [HttpGet("GetTop50Games")]
    public async Task<List<BoardGameDto>> GetTop50Games()
    {
        return await boardGameService.GetTop50Games();
    }

    [HttpPost("SearchGames")]
    public async Task<List<BoardGameDto>> SearchGames([FromBody] SearchRequest searchRequest)
    {
        return await boardGameService.SearchGames(searchRequest);
    }
}