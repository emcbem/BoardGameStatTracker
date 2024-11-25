namespace server.bgst.Requests;

public class UserGameRequest {
    public string? Name { get; set; }
    public int Rank { get; set; }
    public int Points { get; set; }
    public bool Linked { get; set; }
    public int UserId { get; set; }
}