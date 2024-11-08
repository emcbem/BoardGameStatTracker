using Microsoft.EntityFrameworkCore;
using server.bgst.DTOs;
using server.bgst.Data;

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

    internal async Task<UserDto> AddUser(string name, string email)
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
}