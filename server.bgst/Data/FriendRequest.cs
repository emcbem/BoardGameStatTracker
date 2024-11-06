using System;
using System.Collections.Generic;

namespace server.bgst.Data;

public partial class FriendRequest
{
    public int Id { get; set; }

    public int? BgstUser1Id { get; set; }

    public int? BgstUser2Id { get; set; }

    public DateTime? DateSent { get; set; }

    public virtual BgstUser? BgstUser1 { get; set; }

    public virtual BgstUser? BgstUser2 { get; set; }
}
