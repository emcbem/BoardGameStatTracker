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
            DatePublished = boardGame.DatePublished,
        };
    }

    public static UserDto ToUserDto(this BgstUser user)
    {
        return new UserDto
        {
            Id = user.Id,
            Username = user.Username,
            Email = user.Email,
            Imageurl = user.Imageurl,
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

}