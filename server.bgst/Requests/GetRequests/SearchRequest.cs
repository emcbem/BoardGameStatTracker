namespace server.bgst.Requests.GetRequests;

public class SearchRequest 
{
    public int Page { get; set; }
    public int PageCount { get; set; }
    public string Name {get; set;} = "";
    public int MinPlayers { get; set; }
    public int MaxPlayers { get; set; }
    public int MinPlayTime { get; set; }
    public int MaxPlayTime { get; set; }
}