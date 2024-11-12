import axios from "axios";
import { environment } from "../../environment/services/environment";


export const callAuthEndpoint = async (id_token: string) =>
{
    console.log(id_token);
    const response = await axios.get(environment.apiUrl + "/user/getuser", {
        headers: {
            "Authorization": `Bearer ${id_token}` 
        }
    })
    console.log(response);
    return response.data
}
