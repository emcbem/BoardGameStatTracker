import { User } from "../../authentication/types/user";

export interface FriendRequest {
    id: number,
    user: User,
    dateSent: Date
}