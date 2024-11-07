using Microsoft.EntityFrameworkCore;
using server.bgst.Data;
using server.bgst.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();


builder.Services.AddScoped<BoardGameService>();

builder.Services.AddDbContextFactory<BgstContext>(p =>
	p.UseNpgsql(
		builder.Configuration["BGST_CONN"]
	)
);

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();
