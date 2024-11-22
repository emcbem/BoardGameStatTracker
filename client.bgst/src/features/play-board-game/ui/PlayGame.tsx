import { useParams } from "react-router";
import { BoardGameQueries } from "../../board-game/tan-stack/BoardGameQueries";
import { LoadingScreen } from "../../shared/ui/LoadingScreen";
import { useDateInput } from "../../shared/hooks/useDateInput";
import { DateInput } from "../../shared/ui/DateInput";
import { AddPlayerTable } from "./AddPlayerTable";
import { useAddPlayerTable } from "../hooks/useAddPlayerTable";
import { useNumberController } from "../../shared/hooks/useNumberController";
import { NumberInput } from "../../shared/ui/NumberInput";
import { PlayerControllerContext } from "../context/PlayerControllerContext";


export const PlayGame = () => {
  const { boardgameId } = useParams();
  const {
    data: game,
    isLoading,
    isFetching,
  } = BoardGameQueries.useGetSpecificGame(Number.parseInt(boardgameId ?? ""));

  const dateController = useDateInput("Date Played");

  const minPlayers = game?.minPlayers || 1;
  const maxPlayers = game?.maxPlayers || 10;

  const PlayerController = useAddPlayerTable(minPlayers, maxPlayers);
  const InputController = useNumberController({
    min: 0,
    max: 30000,
    placeholder: "e.g. 15, 30...",
  });

  if (isLoading || isFetching) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col items-center">
      <header>
        <h1 className="font-extrabold text-lg mt-2">Play {game?.title}</h1>
      </header>
      <div className="mt-3 rounded-lg shadow-lg w-full sm:w-2/3 lg:w-1/2 bg-swhite-50 p-4">
        <div className="flex flex-col items-center gap-4">
          <img
            className="max-w-[200px] max-h-[200px] shadow-lg object-cover rounded-lg"
            src={game?.imageUrl}
            alt={`${game?.title} Cover`}
          />
          <hr className="z-auto relative border border-swhite-100 w-full"></hr>
          <div className="flex flex-row w-full justify-around">
            <div className="h-[26.5px]">
              <DateInput controller={dateController} />
            </div>
            <div>
              <p className="text-sm font-bold">Play Time (m)</p>
              <div className="shadow-md w-[150px]">
                <NumberInput controller={InputController} />
              </div>
            </div>
          </div>
          <hr className="z-auto relative border border-swhite-100 w-full"></hr>
          <div className="w-full">
            <PlayerControllerContext.Provider value={PlayerController}>

              <AddPlayerTable/>
            </PlayerControllerContext.Provider>
            <div className="mt-4 flex gap-4 justify-center">
              <button
                // onClick={}
                className="bg-green-500 text-swhite-50 px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
