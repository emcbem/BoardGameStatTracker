using System;
using System.Collections.Generic;

namespace server.bgst.Data;

public partial class Collection
{
    public int Id { get; set; }

    public int? BgstUserId { get; set; }

    public int? BoardGameId { get; set; }

    public DateTime? DateAdded { get; set; }

    public virtual BgstUser? BgstUser { get; set; }

    public virtual BoardGame? BoardGame { get; set; }
}
