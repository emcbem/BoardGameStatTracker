import { useQuery } from "@tanstack/react-query"
import { BoardGameKeys } from "./BoardGameKeys"
import { BoardGameService } from "../services/BoardGame"

export const BoardGameQueries = {
    useGetTop50Games: () => {
        return useQuery({
            queryKey: BoardGameKeys.Top50(),
            queryFn: () => BoardGameService.GetTop50Games()
        })
    }
}