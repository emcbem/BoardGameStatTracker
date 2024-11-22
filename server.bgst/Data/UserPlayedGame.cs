using System;
using System.Collections.Generic;

namespace server.bgst.Data;

public partial class UserPlayedGame
{
    public int Id { get; set; }

    public int? PlayedGameId { get; set; }

    public int? BgstUserId { get; set; }

    public int? Points { get; set; }

    public int? EndRank { get; set; }

    public string? Username {get; set;}

    public virtual BgstUser? BgstUser { get; set; }

    public virtual PlayedGame? PlayedGame { get; set; }
}
