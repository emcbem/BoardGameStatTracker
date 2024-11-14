using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.bgst.DTOs;
using server.bgst.Services;

namespace server.bgst.Controllers;

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

    [HttpPost("addgametocollection/{gameId}")]
    [Authorize]
    public async Task<CollectionDto?> AddGameToCollection(int gameId)
    {
        var user = await userService.GetUserFromClaims(User);

        if(user == null)
        {
            return null;
        }

        var collectionDto = await collectionService.AddGameToUser(user, gameId);

        return collectionDto;
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