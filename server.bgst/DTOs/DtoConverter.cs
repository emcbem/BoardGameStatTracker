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
}