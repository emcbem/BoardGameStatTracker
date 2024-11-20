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
                                    .Where(x => x.BgstUser2Id == id)
                                    .Select(x => x.ToFriendRequestDto(id))
                                    .ToListAsync();

        return friendRequests;
    }

    public async Task<bool> AddFriendRequest(string friendGuid, int userId)
    {
		using var context = await _dbContextFactory.CreateDbContextAsync();

        var friendToRequest = await context.BgstUsers.FirstOrDefaultAsync(x => x.Friendcode == friendGuid);

        if(friendToRequest == null)
        {
            return false;
        }

        var newFriendRequest = new FriendRequest()
        {
            BgstUser1Id = userId,
            BgstUser2Id = friendToRequest.Id,
            DateSent = DateTime.UtcNow,
        };

        await context.FriendRequests.AddAsync(newFriendRequest);

        await context.SaveChangesAsync();

        return true;
	}

    public async Task<bool> AcceptFriendRequest(int userId, int friendRequestId)
    {
        using var context = await _dbContextFactory.CreateDbContextAsync();

        var friendRequestToAccept = await context.FriendRequests.FirstOrDefaultAsync(x => x.BgstUser2Id == userId && x.Id == friendRequestId);

        if(friendRequestToAccept is null)
        {
            return false;
        }

        var friend = new Friend()
        {
            BgstUser1Id = friendRequestToAccept.BgstUser1Id,
            BgstUser2Id = userId,
            DateAccepted = DateTime.UtcNow
        };

        context.FriendRequests.Remove(friendRequestToAccept);
        context.Friends.Add(friend);

        await context.SaveChangesAsync();

        return true;
    }

    public async Task<bool> DeclineFriendRequest(int userId, int friendRequestId)
    {
         using var context = await _dbContextFactory.CreateDbContextAsync();

        var friendRequestToAccept = await context.FriendRequests.FirstOrDefaultAsync(x => x.BgstUser2Id == userId && x.Id == friendRequestId);

        if(friendRequestToAccept is null)
        {
            return false;
        }

        context.FriendRequests.Remove(friendRequestToAccept);
        await context.SaveChangesAsync();
        return true;

    }
}