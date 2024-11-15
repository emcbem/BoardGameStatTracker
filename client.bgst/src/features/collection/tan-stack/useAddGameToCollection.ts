import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addGameToCollection } from "../services/CollectionService";
import { UserKeys } from "../../authentication/tan-stack/UserKeys";

export const useAddGameToCollection = (id_token: string) => 
{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({id_token, gameId}: {id_token: string, gameId: number}) => await addGameToCollection(id_token, gameId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: UserKeys.User(id_token)})
        }
    })
}