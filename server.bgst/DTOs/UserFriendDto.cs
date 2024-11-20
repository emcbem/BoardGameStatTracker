namespace server.bgst.DTOs;

public class UserFriendDto
{
    public List<FriendDto>? Friends { get; set; }
    public List<FriendRequestDto>? FriendRequests { get; set; }

}