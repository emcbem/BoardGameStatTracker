namespace server.bgst.DTOs;

public class UserDto
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Imageurl { get; set; }

    public string? Friendcode { get; set; }
}