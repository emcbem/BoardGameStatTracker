import { Collection } from "../../collection/types/collection";

export interface User{
    id: number, 
    username: string,
    email: string,
    imageUrl: string,
    friendCode: string,
    collectionItems: Collection[]
}