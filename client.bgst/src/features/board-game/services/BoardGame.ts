import axios from "axios"
import {BoardGame} from "../types/board-game"
import { environment } from "../../environment/services/environment";

const  boardGameEndpointName = "boardgame"

export const BoardGameService = {
    GetTop50Games: async (): Promise<BoardGame[]> => {
        try{
            const response = await axios.get<BoardGame[]>(
                `${environment.apiUrl}/${boardGameEndpointName}/gettop50games`
            );
            return response.data;
        }
        catch (error)
        {
            console.error("Was unable to retrieve top 50 games:", error);
            throw error
        }
    }
}