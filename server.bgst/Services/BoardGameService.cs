using Microsoft.AspNetCore.Components;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using server.bgst.Data;

namespace server.bgst.Services;

public class BoardGameService
{
    private IDbContextFactory<BgstContext> dbContextFactory {get; set;}

    public BoardGameService(IDbContextFactory<BgstContext> dbContextFactory)
    {
        this.dbContextFactory = dbContextFactory;
    }

}