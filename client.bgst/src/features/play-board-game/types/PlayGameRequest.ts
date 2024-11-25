import { UserPlayedGame } from "./UserPlayedGame";

export interface PlayGameRequest {
    boardGameId: number,
    datePlayed: Date,
    players: UserPlayedGame[],
    timeElapsedMinutes: number
}