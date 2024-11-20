import axios from "axios"
import { environment } from "../../environment/services/environment"
import { UserFriends } from "../types/user-friend"

export const FriendService = {
    getUserFriend: async (idToken: string) => {
        const response = await axios.get<UserFriends>(environment.apiUrl + "/friend/getFriends/", {
            headers: {
                Authorization: `Bearer ${idToken}` 
            }
        })
        return response.data
    },
    sendFriendRequest: async (idToken: string, userFriendCode: string) => {
        const response = await axios.get(environment.apiUrl + "/friend/sendfriendrequest/" + userFriendCode, {
            headers: {
                Authorization: `Bearer ${idToken}` 
            }
        })
        return response
    },
    acceptFriendRequest: async (idToken: string, friendRequestId: number) => {
        const response = await axios.get(environment.apiUrl + "/friend/acceptFriendRequest/" + friendRequestId, {
            headers: {
                Authorization: `Bearer ${idToken}` 
            }
        })
        return response
    },
    declineFriendRequest: async (idToken: string, friendRequestId: number) => {
        const response = await axios.get(environment.apiUrl + "/friend/declineFriendRequest/" + friendRequestId, {
            headers: {
                Authorization: `Bearer ${idToken}` 
            }
        })
        return response
    }
}