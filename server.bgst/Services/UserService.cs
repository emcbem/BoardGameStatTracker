using Microsoft.EntityFrameworkCore;
using server.bgst.DTOs;
using server.bgst.Data;
using System.Security.Claims;

namespace server.bgst.Services;

public class UserService{
    private IDbContextFactory<BgstContext> dbContextFactory { get; set; }

    public UserService(IDbContextFactory<BgstContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

    public async Task<UserDto?> GetUserByEmail(string email)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var user = await context.BgstUsers.Where(x => x.Email == email).FirstOrDefaultAsync();

        return user?.ToUserDto() ?? null;
    }

    private async Task<UserDto> AddUser(string name, string email)
    {
        using var context = await dbContextFactory.CreateDbContextAsync();

        var friendCode = Guid.NewGuid().ToString();

        var newUser = new BgstUser()
        {
            Username = name,
            Email = email,
            Friendcode = Guid.NewGuid().ToString(),
        };

        await context.BgstUsers.AddAsync(newUser);
        await context.SaveChangesAsync();

        return newUser.ToUserDto();
    }

    public async Task<UserDto?> GetUserFromClaims(ClaimsPrincipal user)
    {
        var email = user.FindFirst(ClaimTypes.Email)?.Value;

        var foundUser = await GetUserByEmail(email ?? "");

        if (foundUser == null)
        {
            foundUser = await AddUser(user?.Claims.FirstOrDefault(x => x.Type == "name")?.Value ?? "", email!);
        }

        return foundUser;
    }
}