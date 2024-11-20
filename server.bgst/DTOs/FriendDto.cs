namespace server.bgst.DTOs;

public class FriendDto 
{
    public int Id { get; set;}
    public DateTime? DateAccepted {get; set;}
    public UserDto? User {get; set;}

}