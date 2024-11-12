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
        return await userService.GetUserFromClaims(User);
    }

}