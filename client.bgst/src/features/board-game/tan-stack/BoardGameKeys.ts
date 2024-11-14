import { SearchRequest } from "../types/search-request";

export const BoardGameKeys = {
    BoardGames: ["BoardGames"] as const,
    Top50: () => ["Top50", ...BoardGameKeys.BoardGames] as const,
    Search: (request: SearchRequest) => [request, ...BoardGameKeys.BoardGames] as const,
    Get: (gameId: number) => [gameId, ...BoardGameKeys.BoardGames] as const
}