using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using server.bgst.DTOs;
using server.bgst.Services;

namespace server.bgst.Controllers;


[ApiController]
[Route("[controller]")]
public class FriendController : Controller
{
	private FriendService friendService;
	private readonly UserService userService;

	public FriendController(FriendService friendService, UserService userService)
	{
		this.friendService = friendService;
		this.userService = userService;
	}

	[HttpGet("getFriends")]
	public async Task<UserFriendDto?> GetFriends()
	{
		var user = await userService.GetUserFromClaims(User);

		if (user == null)
		{
			return null;
		}

		return await friendService.GetFriendsAndFriendRequestsById(user.Id);
	}

	[HttpGet("sendFriendRequest/{UserGuid}")]
	public async Task<IActionResult> AddFriendRequest(string UserGuid)
	{
		var user = await userService.GetUserFromClaims(User);

		if (user == null)
		{
			return Unauthorized();
		}
		
		var result = await friendService.AddFriendRequest(UserGuid, user.Id);

		if(result == true)
		{
			return Ok();
		}
		else
		{
			return BadRequest();
		}

	}
}