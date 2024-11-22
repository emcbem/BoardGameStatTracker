import { Friend } from "../../friends/types/friend";
import { UserPlayedGame } from "./UserPlayedGame";

export interface AddPlayerTableController {
    players: UserPlayedGame[],
    minPlayers: number,
    maxPlayers: number,
    addPlayer: () => void,
    handleNameChange:  (index: number, name: string) => void,
    handlePointChange:  (index: number, points: number) => void,
    handleRankChange:  (index: number, rank: number) => void,
    handleLinkPlayer: (index: number, userId?: number, name?: string) => void
    removePlayer:  (index: number) => void,
    friends: Friend[] | undefined
}