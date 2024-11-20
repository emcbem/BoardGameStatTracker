using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.bgst.DTOs;
using server.bgst.Services;

namespace server.bgst.Controllers;

[ApiController]
[Route("[controller]")]
public class CollectionController : Controller
{
    private readonly UserService userService;
    private readonly CollectionService collectionService;

    public CollectionController(UserService userService, CollectionService collectionService)
    {
        this.userService = userService;
        this.collectionService = collectionService;
    }

    [HttpGet("getcollectionlist")]
    [Authorize]
    public async Task<List<CollectionDto>?> GetCollectionList()
    {
        var user = await userService.GetUserFromClaims(User);

        if(user == null)
        {
            return null;
        }
        var collections = await collectionService.GetCollectionListForUser(user.Id);

        return collections;
    }

    [HttpGet("addgametocollection/{gameId}")]
    public async Task<IActionResult?> AddGameToCollection(int gameId)
    {
        if(User == null || User.Identity?.IsAuthenticated == false )
        {
            return Unauthorized();
        }

        var user = await userService.GetUserFromClaims(User);

        if(user == null)
        {
            return Unauthorized();
        }

        var collectionDto = await collectionService.AddGameToUser(user, gameId);

        return Ok(collectionDto);
    }

    [HttpGet("getcollection/{id}")]
    [Authorize]
    public async Task<CollectionDto?> GetCollectionById(int id)
    {
        var user = await userService.GetUserFromClaims(User);

        if(user == null)
        {
            return null;
        }

        var collectionDto = await collectionService.GetCollectionById(user, id);

        return collectionDto;
    }
}