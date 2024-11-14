using Microsoft.EntityFrameworkCore;
using server.bgst.Data;
using server.bgst.DTOs;

namespace server.bgst.Services;

public class CollectionService
{
    private IDbContextFactory<BgstContext> dbContextFactory { get; set; }

    public CollectionService(IDbContextFactory<BgstContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<List<CollectionDto>> GetCollectionListForUser(int userId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var collection = await context
                        .Collections
                        .Include(c => c.BoardGame)
                        .Where(c => c.BgstUserId == userId)
                        .Select(c => c.ToCollectionDto())
                        .ToListAsync();

        return collection;
    }

    public async Task<CollectionDto?> AddGameToUser(UserDto user, int gameId)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var game = context.BoardGames.FirstOrDefault(b => b.Id == gameId);

        if (game == null)
        {
            return null;
        }

        var newCollection = new Collection()
        {
            BgstUserId = user.Id,
            BoardGameId = game.Id,
            DateAdded = DateTime.Today.ToUniversalTime()
        };

        await context.Collections.AddAsync(newCollection);

        await context.SaveChangesAsync();

        return (await context.Collections.Include(c => c.BoardGame).FirstOrDefaultAsync(c => c.Id == newCollection.Id))?.ToCollectionDto() ?? null;
    }

    public async Task<CollectionDto?> GetCollectionById(UserDto user, int id)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        return (await context.Collections.Include(c => c.BoardGame).FirstOrDefaultAsync(c => c.BgstUserId == user.Id && c.Id == id))?.ToCollectionDto() ?? null;
    }
}