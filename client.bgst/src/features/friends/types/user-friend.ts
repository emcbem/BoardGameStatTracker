import { Friend } from "./friend";
import { FriendRequest } from "./friend-request";

export interface UserFriends {
    friends: Friend[],
    friendRequests: FriendRequest[]
}