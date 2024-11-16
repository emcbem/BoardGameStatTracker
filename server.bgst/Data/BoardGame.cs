using System;
using System.Collections.Generic;

namespace server.bgst.Data;

public partial class BoardGame
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string? ImageUrl { get; set; }

    public int? MaxPlayers { get; set; }

    public int? MinPlayers { get; set; }

    public int? MinEstimatedPlayTimeMinutes { get; set; }

	public int? YearPublished { get; set; }

	public int? MaxEstimatedPlayTimeMinutes { get; set; }

    public string? Description {get; set;}

    public int? Age {get; set;}

    public virtual ICollection<Collection> Collections { get; set; } = new List<Collection>();

    public virtual ICollection<PlayedGame> PlayedGames { get; set; } = new List<PlayedGame>();
}
