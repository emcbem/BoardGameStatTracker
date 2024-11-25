namespace server.bgst.Requests;

public class PlayGameRequest {
    public int BoardGameId { get; set; }
    public DateTime? DatePlayed { get; set; }
    public List<UserGameRequest>? players { get; set; }
    public int? TimeElapsedMinutes { get; set; }
}