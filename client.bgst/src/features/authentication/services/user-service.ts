import axios from "axios";
import { environment } from "../../environment/services/environment";
import { User } from "../types/user";


export const getUserByIdToken = async (id_token: string) =>
{
    const response = await axios.get<User>(environment.apiUrl + "/user/getuser", {
        headers: {
            Authorization: `Bearer ${id_token}` 
        }
    })
    return response.data
}
