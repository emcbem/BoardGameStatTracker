namespace server.bgst.DTOs;

using server.bgst.Data;

public class BoardGameDto
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string? ImageUrl { get; set; }

    public int? MaxPlayers { get; set; }

    public int? MinPlayers { get; set; }

    public int? MinEstimatedPlayTimeMinutes { get; set; }

	public int? MaxEstimatedPlayTimeMinutes { get; set; }

	public int? YearPublished { get; set; }

    public string? Description { get; set; }

    public int? Age { get; set; }


}