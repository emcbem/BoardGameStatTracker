using Microsoft.AspNetCore.Mvc;
using server.bgst.DTOs;
using server.bgst.Requests;
using server.bgst.Services;

namespace server.bgst.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayController : Controller
{
    private readonly PlayService playService;
    private readonly UserService userService;

    public PlayController(PlayService playService, UserService userService)
    {
        this.playService = playService;
        this.userService = userService;
    }

    [HttpPost]
    public async Task<IActionResult> Post(PlayGameRequest playGameRequest)
    {
       var result = await playService.PlayGame(playGameRequest);
       if(result)
       {
        return Ok();
       }
       else
       {
        return BadRequest("Erm, this didn't work");
       }
    }

    [HttpGet("getStats/{boardGameId}")]
    public async Task<BoardGameStats?> GetBoardGameStats(int boardGameId)
    {
        var user = await userService.GetUserFromClaims(User);

		if (user == null)
		{
			return null;
		}

        var boardGameStats = await playService.GetUserStatsForGame(user.Id, boardGameId);
        return boardGameStats;
    }
}