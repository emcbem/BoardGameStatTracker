import axios from "axios"
import { environment } from "../../environment/services/environment"
import { Collection } from "../types/collection"


export const addGameToCollection = async (id_token: string, gameId: number) =>
    {
        console.log(id_token)
        await axios.get<Collection>(environment.apiUrl + "/Collection/addgametocollection/" + gameId , {
            headers: {
                Authorization: `Bearer ${id_token}` 
            }
        })
    }