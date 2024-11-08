import axios from "axios";

const baseUrl = "http://localhost:5184"
export const callAuthEndpoint = async (id_token: string) =>
{
    console.log(id_token);
    const response = await axios.get(baseUrl + "/user/getuser", {
        headers: {
            "Authorization": `Bearer ${id_token}` 
        }
    })
    console.log(response);
    return response.data
}

export const callPublicEndpoint = async () =>
    {
        const response = await axios.get(baseUrl + "/boardgame/gettop50games")
        console.log(response);
        return response.data
    }