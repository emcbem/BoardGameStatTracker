import { BoardGame } from "../../board-game/types/board-game";

export interface Collection{
    id: number, 
    dateAdded: Date,
    boardGame: BoardGame
}