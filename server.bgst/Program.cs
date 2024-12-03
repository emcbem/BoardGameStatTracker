using Microsoft.EntityFrameworkCore;
using server.bgst.Data;
using server.bgst.Services;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpContextAccessor();

builder.Services.AddControllers();
builder.Services.AddCors();

builder.Services.AddScoped<BoardGameService>();
builder.Services.AddScoped<CollectionService>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<FriendService>();
builder.Services.AddScoped<PlayService>();



builder.Services.AddDbContextFactory<BgstContext>(p =>
	p.UseNpgsql(
		builder.Configuration["BGST_CONN"]
	)
);

builder.Services.AddAuthentication("Bearer")
	.AddJwtBearer("Bearer", options =>
	{
		options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidIssuer = "https://dev-013fwxix4dwe1jea.us.auth0.com",
                ValidAudience = "RN5ONZNFTAcXegQh2aPrVuubc65II5lU",
            };
		options.Authority = "https://dev-013fwxix4dwe1jea.us.auth0.com";
	});

var app = builder.Build();

app.UseCors(p =>
p.AllowAnyHeader()
 .AllowAnyMethod()
 .AllowAnyOrigin());

app.UseAuthentication();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();
