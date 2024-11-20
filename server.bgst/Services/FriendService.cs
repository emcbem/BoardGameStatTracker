using Microsoft.EntityFrameworkCore;
using server.bgst.Data;
using server.bgst.DTOs;

namespace server.bgst.Services;

public class FriendService
{
    private IDbContextFactory<BgstContext> _dbContextFactory;

    public FriendService(IDbContextFactory<BgstContext> dbContextFactory)
    {
        _dbContextFactory = dbContextFactory;
    }

    public async Task<List<FriendDto>> GetFriendsById(int id)
    {
        using var context = await _dbContextFactory.CreateDbContextAsync();

        var friends = await context.Friends
                .Include(x => x.BgstUser1)
                .Include(x => x.BgstUser2)
                .Where(x => x.BgstUser1Id == id || x.BgstUser2Id == id)
                .Select(x => x.ToFriendDto(id))
                .ToListAsync();

        return friends;
    }

    public async Task<UserFriendDto> GetFriendsAndFriendRequestsById(int id)
    {
        var friends = await GetFriendsById(id);
        var friendRequests = await GetFriendRequestsById(id);

        return new UserFriendDto(){
            FriendRequests = friendRequests,
            Friends = friends
        };
    }

    public async Task<List<FriendRequestDto>> GetFriendRequestsById(int id)
    {
        using var context = await _dbContextFactory.CreateDbContextAsync();

        var friendRequests = await context.FriendRequests
                                    .Include(x => x.BgstUser1)
                                    .Include(x => x.BgstUser2)
                                    .Where(x => x.BgstUser1Id == id || x.BgstUser2Id == id)
                                    .Select(x => x.ToFriendRequestDto(id))
                                    .ToListAsync();

        return friendRequests;
    }
}