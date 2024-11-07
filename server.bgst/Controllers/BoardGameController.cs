using Microsoft.AspNetCore.Mvc;
using server.bgst.Data;
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
    public async Task<List<BoardGame>> GetTop50Games()
    {
        return await boardGameService.GetTop50Games();
    }
}