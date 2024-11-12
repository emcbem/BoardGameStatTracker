namespace server.bgst.Data;

public class Page<T>
{
    public int pageNumber { get; set; }
    public bool hasNextPage { get; set; }
    public int totalCount { get; set; }
    public List<T> data { get; set; } = new List<T>();
}