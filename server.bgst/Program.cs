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


builder.Services.AddScoped<BoardGameService>();
builder.Services.AddScoped<UserService>();


builder.Services.AddDbContextFactory<BgstContext>(p =>
	p.UseNpgsql(
		builder.Configuration["BGST_CONN"]
	)
);

builder.Services.AddAuthentication("Bearer")
	.AddJwtBearer("Bearer", options =>
	{
		options.Authority = "https://auth.snowse.duckdns.org/realms/advanced-frontend";
		options.Audience = "bgst-client-id";
		// options.TokenValidationParameters = new TokenValidationParameters
		// {
		// 	ValidAudience = "bgst-client-id"
		// };
	});

var app = builder.Build();

app.UseCors(p =>
p
	.AllowAnyHeader()
	.AllowAnyMethod()
	.AllowAnyOrigin());

app.UseAuthentication();
app.UseAuthorization();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.Run();
