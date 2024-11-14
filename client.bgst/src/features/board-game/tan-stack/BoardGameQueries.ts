import { useQuery } from "@tanstack/react-query"
import { BoardGameKeys } from "./BoardGameKeys"
import { BoardGameService } from "../services/BoardGame"
import { SearchRequest } from "../types/search-request"

export const BoardGameQueries = {
    useGetTop50Games: () => {
        return useQuery({
            queryKey: BoardGameKeys.Top50(),
            queryFn: () => BoardGameService.GetTop50Games()
        })
    },
    useSearchBoardGames: (request: SearchRequest) => 
    {
        return useQuery({
            queryKey: BoardGameKeys.Search(request),
            queryFn: () => BoardGameService.SearchGames(request)
        })
    },
    useGetSpecificGame: (gameId: number) => 
    {
        return useQuery({
            queryKey: BoardGameKeys.Get(gameId),
            queryFn: () => BoardGameService.GetGameById(gameId)
        })
    }
}