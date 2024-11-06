using System;
using System.Collections.Generic;

namespace server.bgst.Data;

public partial class Friend
{
    public int Id { get; set; }

    public int? BgstUser1Id { get; set; }

    public int? BgstUser2Id { get; set; }

    public DateTime? DateAccepted { get; set; }

    public virtual BgstUser? BgstUser1 { get; set; }

    public virtual BgstUser? BgstUser2 { get; set; }
}
