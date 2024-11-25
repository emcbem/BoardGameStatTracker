using Microsoft.AspNetCore.Mvc;
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
}