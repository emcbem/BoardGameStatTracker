export interface SearchRequest {
    page: number,
    pageCount: number,
    name: string,
    minPlayers: number,
    maxPlayers: number,
    minPlaytime: number,
    maxPlaytime: number,
    order: number
}

export interface SearchRequestController{
    searchRequest: SearchRequest
    setSearchRequest: React.Dispatch<React.SetStateAction<SearchRequest>>
}