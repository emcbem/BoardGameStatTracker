import axios from "axios"
import { environment } from "../../environment/services/environment"
import { UserFriends } from "../types/user-friend"

export const FriendService = {
    getUserFriend: async (id_token: string) => {
        const response = await axios.get<UserFriends>(environment.apiUrl + "/friend/getFriends/", {
            headers: {
                Authorization: `Bearer ${id_token}` 
            }
        })
        return response.data

    }
}