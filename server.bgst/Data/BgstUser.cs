using System;
using System.Collections.Generic;

namespace server.bgst.Data;

public partial class BgstUser
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? Imageurl { get; set; }

    public string? Friendcode { get; set; }

    public virtual ICollection<Collection> Collections { get; set; } = new List<Collection>();

    public virtual ICollection<Friend> FriendBgstUser1s { get; set; } = new List<Friend>();

    public virtual ICollection<Friend> FriendBgstUser2s { get; set; } = new List<Friend>();

    public virtual ICollection<FriendRequest> FriendRequestBgstUser1s { get; set; } = new List<FriendRequest>();

    public virtual ICollection<FriendRequest> FriendRequestBgstUser2s { get; set; } = new List<FriendRequest>();

    public virtual ICollection<UserPlayedGame> UserPlayedGames { get; set; } = new List<UserPlayedGame>();
}
