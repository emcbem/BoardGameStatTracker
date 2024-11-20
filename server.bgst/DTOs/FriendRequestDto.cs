namespace server.bgst.DTOs;

public class FriendRequestDto
{
    public int Id { get; set;}
    public UserDto? User {get; set;}
    public DateTime? DateSent {get; set;}
}