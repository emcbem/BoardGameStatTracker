namespace server.bgst.DTOs;

public class BoardGameStats {
    public BoardGameDto? BoardGame { get; set; }
    public int? TimesPlayed { get; set; }
    public double? AverageScore {get; set;}
    public double? AverageRank { get; set; }
    public List<PlayedGameDTO>? PlayedGames { get; set; }
}