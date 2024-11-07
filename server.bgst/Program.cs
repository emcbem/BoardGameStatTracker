using Microsoft.EntityFrameworkCore;
using server.bgst.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();


builder.Services.AddDbContextFactory<BgstContext>(p =>
    p.UseNpgsql(
        builder.Configuration["BGST_CONN"]
    )
);

var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

app.Run();
