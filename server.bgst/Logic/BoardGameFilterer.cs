using server.bgst.Data;

namespace server.bgst.Logic;

public static class BoardGameFilterer
{
    public static IEnumerable<BoardGame> FilterOnPlayTime(IEnumerable<BoardGame> boardGames, int minPlayTime, int maxPlayTime)
    {
        return boardGames.Where(x => x.MinEstimatedPlayTimeMinutes >= minPlayTime && x.MaxEstimatedPlayTimeMinutes <= maxPlayTime);
    }

    public static IEnumerable<BoardGame> FilterOnPlayers(IEnumerable<BoardGame> boardGames, int minPlayers, int maxPlayers)
    {
        return boardGames.Where(x => x.MinPlayers >= minPlayers && x.MaxPlayers <= maxPlayers);

    }
}