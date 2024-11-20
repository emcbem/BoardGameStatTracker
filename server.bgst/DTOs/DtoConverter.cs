using Npgsql.Replication;
using server.bgst.Data;

namespace server.bgst.DTOs;

public static class DtoConverter
{
    public static BoardGameDto ToBoardGameDto(this BoardGame boardGame)
    {
        return new BoardGameDto
        {
            Id = boardGame.Id,
            Title = boardGame.Title,
            ImageUrl = boardGame.ImageUrl,
            MaxPlayers = boardGame.MaxPlayers,
            MinPlayers = boardGame.MinPlayers,
            MinEstimatedPlayTimeMinutes = boardGame.MinEstimatedPlayTimeMinutes,
            MaxEstimatedPlayTimeMinutes = boardGame.MaxEstimatedPlayTimeMinutes,
            YearPublished = boardGame.YearPublished,
            Age = boardGame.Age,
            Description = boardGame.Description,
        };
    }

    public static UserDto ToUserDto(this BgstUser user)
    {
        return new UserDto
        {
            Id = user.Id,
            Username = user.Username,
            Email = user.Email,
            ImageUrl = user.Imageurl,
            Friendcode = user.Friendcode,
            CollectionItems = user.Collections?.Select(c => c.ToCollectionDto()).ToList() ?? null
        };
    }

    public static CollectionDto ToCollectionDto(this Collection collection)
    {
        return new CollectionDto
        {
            Id = collection.Id,
            DateAdded = collection.DateAdded,
            BoardGame = collection.BoardGame?.ToBoardGameDto(),
        };
    }

    public static UserDto ToPrivateUserDto(this BgstUser user){
        return new UserDto
            {
                Username = user.Username,
                ImageUrl = user.Imageurl,
            };
    }

    public static FriendDto ToFriendDto(this Friend friend, int id)
    {
        UserDto user;

        if(friend.BgstUser1Id == id)
        {
            user = friend.BgstUser2!.ToPrivateUserDto();
        }
        else
        {
            user = friend.BgstUser1!.ToPrivateUserDto();
        }

        return new FriendDto{
            Id = friend.Id,
            DateAccepted = friend.DateAccepted,
            User = user
        };
    }

    public static FriendRequestDto ToFriendRequestDto(this FriendRequest friendRequest, int id)
    {
        UserDto user;

        if(friendRequest.BgstUser1Id == id)
        {
            user = friendRequest.BgstUser2!.ToPrivateUserDto();
        }
        else
        {
            user = friendRequest.BgstUser1!.ToPrivateUserDto();
        }

        return new FriendRequestDto
        {
            Id = friendRequest.Id,
            User = user,
            DateSent = friendRequest.DateSent,
        };
    }

}