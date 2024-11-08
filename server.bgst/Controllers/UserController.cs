using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.bgst.DTOs;
using server.bgst.Services;
using System.Security.Claims;

namespace server.bgst.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : Controller
{
    private readonly UserService userService;

    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    [HttpGet("getUser")]
    [Authorize]
    public async Task<UserDto?> GetProfile()
    {
        var email = User.FindFirst(ClaimTypes.Email)?.Value;

        var user = await userService.GetUserByEmail(email ?? "");

        if (user == null)
        {
            user = await userService.AddUser( User?.Claims.FirstOrDefault(x => x.Type == "name")?.Value ?? "", email!);
        }

        return user;
    }

}