import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addGameToCollection } from "../services/CollectionService";
import { UserKeys } from "../../authentication/tan-stack/UserKeys";
import toast from "react-hot-toast";

export const useAddGameToCollection = (id_token: string) => 
{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({id_token, gameId}: {id_token: string, gameId: number}) => await addGameToCollection(id_token, gameId),
        onSuccess: () => {
            toast.success("Game added to collection")
            queryClient.invalidateQueries({ queryKey: UserKeys.User(id_token)})
        },
        onError: () => {
            toast.error("Unable to add game to collection. Please try again later")

        }
    })
}