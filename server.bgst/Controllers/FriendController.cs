using Microsoft.AspNetCore.Mvc;
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

        if(user == null)
        {
            return null;
        }

        return await friendService.GetFriendsAndFriendRequestsById(user.Id);
    }
}