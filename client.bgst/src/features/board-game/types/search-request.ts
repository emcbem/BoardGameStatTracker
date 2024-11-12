export interface SearchRequest {
    page: number,
    pageCount: number,
    name: string,
    minPlayers: number,
    maxPlayers: number,
    minPlaytime: number,
    maxPlaytime: number
}