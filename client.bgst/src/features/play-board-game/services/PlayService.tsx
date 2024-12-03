import axios from "axios";
import { environment } from "../../environment/services/environment";
import { PlayGameRequest } from "../types/PlayGameRequest";
import { GameStats } from "../../stats/types/GameStats";

export const PlayService = {
  PlayGame: async (playGameRequest: PlayGameRequest) => {
    return await axios.post<boolean>(
      `${environment.apiUrl}/play`,
      playGameRequest, // Send the object directly
      {
        headers: {
          "Content-Type": "application/json", // Correct header
        },
      }
    );
  },
  GetUserGameStats: async (idToken: string, boardGameId: number) => {
    return await axios.get<GameStats>(
      `${environment.apiUrl}/play/getStats/${boardGameId}`,
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );
  },
};
