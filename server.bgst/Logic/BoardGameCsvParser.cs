using CsvHelper.Configuration;
using CsvHelper;

using server.bgst.Data;
using System.Globalization;

namespace server.bgst.Logic;

public static class BoardGameCsvParser
{
	public static Dictionary<int, string> GetImageUrls()
	{
		var config = new CsvConfiguration(CultureInfo.InvariantCulture);

		var dict = new Dictionary<int, string>();

		using (var reader = new StreamReader("./Logic/Csvs/bgg_db_1806.csv"))
		using (var csv = new CsvReader(reader, config))
		{
			csv.Read();
			csv.ReadHeader();

			while (csv.Read())
			{

				var gameId = csv.GetField<int>("game_id");
				var imageUrl = csv.GetField<string>("image_url");

				dict.Add(gameId, imageUrl ?? "");
			}
		}

		return dict;
	}

	public static List<BoardGame> ParseBoardGamesFromCsv()
	{
		var config = new CsvConfiguration(CultureInfo.InvariantCulture);

		var imageDict = GetImageUrls();


		var boardGames = new List<BoardGame>();

		using (var reader = new StreamReader("./Logic/Csvs/result.csv"))
		using (var csv = new CsvReader(reader, config))
		{
			csv.Read();
			csv.ReadHeader();

			while (csv.Read())
			{
				var boardGame = new BoardGame();

				boardGame.Title = csv.GetField<string?>("name")?? "";

				boardGame.MaxEstimatedPlayTimeMinutes = csv.GetField<int?>("maxplaytime");
				boardGame.MinEstimatedPlayTimeMinutes = csv.GetField<int?>("minplaytime");

				boardGame.MinPlayers = csv.GetField<int?>("minplayers");
				boardGame.MaxPlayers = csv.GetField<int?>("maxplayers");

				boardGame.YearPublished = csv.GetField<int>("yearpublished");

				var gameId = csv.GetField<int>("id");
				boardGame.ImageUrl = imageDict[gameId];

				boardGame.Age = csv.GetField<int>("age");

				boardGame.Description = csv.GetField<string>("description");

				boardGames.Add(boardGame);
			}
		}

		return boardGames;
	}
}
