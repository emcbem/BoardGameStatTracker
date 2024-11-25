import { useContext } from "react";
import { PlayerRankSelector } from "./PlayerRankSelector";
import { PlayerPointChanger } from "./PlayerPointChanger";
import { PlayerNameChange } from "./PlayerNameChange";
import { PlayerControllerContext } from "../context/PlayerControllerContext";
import { PlayerButtons } from "./PlayerButtons";
import { TextInput } from "../../shared/ui/TextInput";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export const AddPlayerTable = () => {
  const controller = useContext(PlayerControllerContext)
  const user = useUserContext()

  return (
    <>
    <div className="flex flex-row align-middle justify-center items-center pb-2">

      <p className="text-lg font-bold text-center">Choose Players</p>
      <button
        onClick={controller.addPlayer}
        className="bg-bgst-500 text-swhite-50 h-fit w-fit rounded-full ml-3 disabled:bg-bgst-200 disabled:rotate-45 transition-all duration-500"
        disabled={controller.players.length >= controller.maxPlayers}
        >
        <PlusCircleIcon className="w-5 h-5"/>
      </button>
        </div>
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
          <tr>
            <td className="border border-swhite-300 rounded-none p-2">
              <div className="bg-swhite-50 outline outline-darkness-50 focus:border-none focus:outline-none focus:outline-transparent rounded-sm h-[26.5px]">

              <TextInput input={user.user?.username + " (You)"} placeholder="" setInput={() => {}} disabled={true}/>
              </div>
            </td>
            <td className="border border-swhite-300 p-2 ">
            <PlayerRankSelector
                  index={0}
                />
            </td>
            <td className="border border-swhite-300 p-2">
                <PlayerPointChanger
                  handlePointChange={(points: number) =>
                    controller.handlePointChange(0, points)
                  }
                />
              </td>
          </tr>
          {controller.players.map((_, index) => {if(index > 0) return (<tr key={index}>
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
          )})}
        </tbody>
      </table>
      
    </>
  );
};
