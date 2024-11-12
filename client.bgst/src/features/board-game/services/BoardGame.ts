import axios from "axios"
import {BoardGame} from "../types/board-game"
import { environment } from "../../environment/services/environment";
import { Page } from "../types/page";
import { SearchRequest } from "../types/search-request";

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
    },
    SearchGames: async (searchRequest: SearchRequest): Promise<Page<BoardGame>> => {
        try{
            const response = await axios.post<Page<BoardGame>>(
                `${environment.apiUrl}/${boardGameEndpointName}/SearchGames`,
                searchRequest

            );
            return response.data
        }
        catch 
        {
            console.log("Was unable to search games");
            throw Error("Unable to search games")
        }
    }
}