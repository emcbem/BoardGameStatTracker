import { useContext } from "react";
import { PlayerRankSelector } from "./PlayerRankSelector";
import { PlayerPointChanger } from "./PlayerPointChanger";
import { PlayerNameChange } from "./PlayerNameChange";
import { PlayerControllerContext } from "../context/PlayerControllerContext";
import { PlayerButtons } from "./PlayerButtons";

export const AddPlayerTable = () => {
  const controller = useContext(PlayerControllerContext)

  return (
    <>
      <p className="text-lg font-bold text-center">Choose Players</p>
      <table className="table-auto w-full border-collapse border border-swhite-300 text-sm text-left">
        <thead>
          <tr className="bg-swhite-200">
            <th className="border border-swhite-300 w-2/5 p-2">Player Name</th>
            <th className="border border-swhite-300 w-1/6 p-2">Rank</th>
            <th className="border border-swhite-300 w-1/6 p-2">Points</th>
            <th className="border border-swhite-300 w-3/6 p-2 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {controller.players.map((_, index) => (
            <tr key={index}>
              <td className="border border-swhite-300 rounded-none p-2">
                <PlayerNameChange index={index}/>
              </td>
              <td className="border border-swhite-300 p-2">
                <PlayerRankSelector
                  index={index}
                />
              </td>
              <td className="border border-swhite-300 p-2">
                <PlayerPointChanger
                  handlePointChange={(points: number) =>
                    controller.handlePointChange(index, points)
                  }
                />
              </td>
              <td className="border border-swhite-300 p-2  text-center">
                <div className="flex flex-row gap-2 items-center h-[26.5px]">
                  <PlayerButtons index={index}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={controller.addPlayer}
        className="bg-blue-500 text-swhite-50 px-4 py-2 rounded"
        disabled={controller.players.length >= controller.maxPlayers}
      >
        Add Player
      </button>
    </>
  );
};
