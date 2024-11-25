import axios from "axios";
import { environment } from "../../environment/services/environment";
import { PlayGameRequest } from "../types/PlayGameRequest";

export const PlayService = {
  PlayGame: async (playGameRequest: PlayGameRequest): Promise<boolean> => {
    try {
        await axios.post<boolean>(
            `${environment.apiUrl}/play`,
            playGameRequest, // Send the object directly
            {
              headers: {
                "Content-Type": "application/json", // Correct header
              },
            }
          );
      return true;
    } catch {
      return false;
    }
  },
};
