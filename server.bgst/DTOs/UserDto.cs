namespace server.bgst.DTOs;

public class UserDto
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? ImageUrl { get; set; }

    public string? Friendcode { get; set; }

    public List<CollectionDto>? CollectionItems { get; set; }
}