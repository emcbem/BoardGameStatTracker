using CsvHelper.Configuration;
using CsvHelper;

using server.bgst.Data;
using System.Globalization;

namespace server.bgst.Logic;

public static class BoardGameCsvParser
{
	public static List<BoardGame> ParseBoardGamesFromCsv()
	{
		var config = new CsvConfiguration(CultureInfo.InvariantCulture);

		var boardGames = new List<BoardGame>();

		using (var reader = new StreamReader("./Logic/Csvs/bgg_db_1806.csv"))
		using (var csv = new CsvReader(reader, config))
		{
			csv.Read();
			csv.ReadHeader();

			while (csv.Read())
			{
				var boardGame = new BoardGame();

				boardGame.Title = csv.GetField<string?>("names")?? "";
				boardGame.MaxEstimatedPlayTimeMinutes = csv.GetField<int?>("max_time");
				boardGame.MinEstimatedPlayTimeMinutes = csv.GetField<int?>("min_time");
				boardGame.MinPlayers = csv.GetField<int?>("min_players");
				boardGame.MaxPlayers = csv.GetField<int?>("max_players");
				DateTime date;
				try
				{
					date = new DateTime(csv.GetField<int>("year"), 1, 1);
				}
				catch(ArgumentOutOfRangeException ex)
				{
					if(ex.Message.Contains("un-representable DateTime"))
					{
						date = new DateTime(2000, 1, 2);
					}
					else
					{
						throw new Exception(ex.Message);
					}
				}

				boardGame.ImageUrl = csv.GetField<string>("image_url");

				boardGames.Add(boardGame);
			}
		}

		return boardGames;
	}
}
