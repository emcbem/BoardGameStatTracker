import { User } from "../../authentication/types/user";

export interface Friend {
    id: number,
    dateAccepted: Date,
    user: User
}