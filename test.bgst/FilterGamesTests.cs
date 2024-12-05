using FluentAssertions;
using server.bgst.Data;
using server.bgst.Logic;
using server.bgst.Requests.GetRequests;

namespace test.bgst;

public record testGame
{
    public int MinEstimatedPlayTime;
    public int MaxEstimatedPlayTime;
    public int MinPlayers;
    public int MaxPlayers;

    public testGame(int min, int max)
    {
        MinEstimatedPlayTime = min;
        MaxEstimatedPlayTime = max;
        MinPlayers = min;
        MaxPlayers = max;
    }
}

public class Tests
{
    [SetUp]
    public void Setup()
    {

    }


	public static IEnumerable<TestCaseData> FilterOnMinPlayTimeCases()
	{
        List<TestCaseData> testCases = new()
        {
            new TestCaseData(new List<testGame> { new testGame(60, 60), new testGame(45, 90) }, 46, 75, 0, 100, 1, new List<string>() { "Test 1" }),
			new TestCaseData(new List<testGame> { new testGame(60, 60), new testGame(45, 90) }, 45, 90, 0, 100, 2, new List<string>() { "Test 1", "Test 2" }),
			new TestCaseData(new List<testGame> { new testGame(60, 61), new testGame(45, 90) }, 45, 61, 0, 100, 1, new List<string>() { "Test 1" }),
			new TestCaseData(new List<testGame> { new testGame(10, 15), new testGame(15, 30) }, 10, 30, 0, 100, 2, new List<string>() { "Test 1", "Test 2" }),
			new TestCaseData(new List<testGame> { new testGame(2 , 4 ), new testGame(2 , 5 ) }, 0, 100, 1, 5, 2, new List<string>() { "Test 1", "Test 2" }),
			new TestCaseData(new List<testGame> { new testGame(2 , 4 ), new testGame(2 , 5 ) }, 0, 100, 3, 5, 0, new List<string>() { }),
			new TestCaseData(new List<testGame> { new testGame(2 , 4 ), new testGame(2 , 5 ) }, 0, 0, 0, 0, 10, new List<string>() { "Test 1" }),
		};

        foreach (var testCase in testCases)
        {
            yield return testCase;
        }
	}

	[Test]
	[TestCaseSource(nameof(FilterOnMinPlayTimeCases))]
	public void FilterOnMinPlayTimeWorks(List<testGame> games, int searchMinPlayTime, int searchMaxPlayTime, int searchMinPlayers, int searchMaxPlayers, int expectedCount, List<string> expectedTitles)
    {
        var testGames = games.Select((x, i) => new BoardGame()
        {
            Title = $"Test {i}",
            MinEstimatedPlayTimeMinutes = x.MinEstimatedPlayTime,
            MaxEstimatedPlayTimeMinutes = x.MaxEstimatedPlayTime,
            MinPlayers = x.MinPlayers,
            MaxPlayers = x.MaxPlayers
        }).ToList(); 

        var result = BoardGameFilterer.FilterOnPlayTime(testGames, searchMinPlayTime, searchMaxPlayTime);
        result = BoardGameFilterer.FilterOnPlayers(result, searchMinPlayers, searchMaxPlayers);

        result.Count().Should().Be(expectedCount);
        result.ToList().All(x => expectedTitles.Contains(x.Title));
    }
}