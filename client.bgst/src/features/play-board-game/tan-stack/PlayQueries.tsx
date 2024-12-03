import { useMutation, useQuery } from "@tanstack/react-query"
import { PlayGameRequest } from "../types/PlayGameRequest"
import { PlayService } from "../services/PlayService"
import toast from "react-hot-toast"

export const PlayQueries = {
    usePlayGame: () => {
        return useMutation({
            mutationFn: async ({playerRequest}: {playerRequest: PlayGameRequest}) => {
                const response = await PlayService.PlayGame(playerRequest)
                if(!response)
                {
                    throw new Error("L")
                }
            }, onSuccess: () => {
                toast.success("Game has been stored")
            },
            onError: () => {
                toast.error("Unable to store game")
            }
        })
    },
    useGetUserGameStats: (idToken: string, boardGameId: number) => {
        return useQuery({
            queryKey: ["gameStats", idToken, boardGameId],
            queryFn: async () => {
                const response = await PlayService.GetUserGameStats(idToken, boardGameId); 
                return response.data}
        })
    }
}
