namespace server.bgst.DTOs;

public class CollectionDto {
    public int Id { get; set; }
    public DateTime? DateAdded { get; set; }
    public BoardGameDto? BoardGame { get; set; }
}