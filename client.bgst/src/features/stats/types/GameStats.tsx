import { BoardGame } from "../../board-game/types/board-game"
import { PlayedGame } from "./PlayedGame"

export interface GameStats {
    boardGame: BoardGame,
    timesPlayed: number,
    averageScore: number,
    averageRank: number,
    playedGames: PlayedGame[]
  }
  
