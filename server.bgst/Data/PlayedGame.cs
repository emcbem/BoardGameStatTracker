using System;
using System.Collections.Generic;

namespace server.bgst.Data;

public partial class PlayedGame
{
    public int Id { get; set; }

    public int? BoardGameId { get; set; }

    public DateTime? DatePlayed { get; set; }

    public virtual BoardGame? BoardGame { get; set; }

    public virtual ICollection<UserPlayedGame> UserPlayedGames { get; set; } = new List<UserPlayedGame>();
}
