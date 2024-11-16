import { Link } from "react-router-dom";
import { BoardGame } from "../types/board-game";

export const BoardGameCard = ({ boardGame }: { boardGame: BoardGame }) => {
  return (
    <Link
      to={`/view-boardgame/${boardGame.id}`}
      className="p-4 bg-swhite-50 rounded-lg shadow-md hover:shadow-lg transition flex flex-col"
    >
      <div className=" bg-swhite-200 rounded-md flex justify-center">
        <img
          src={boardGame.imageUrl}
          className="h-[250px] sm:h-[400px]  rounded-md object-contain"
        ></img>
      </div>
      <div className="flex justify-center">
        <h3 className="text-md font-semibold truncate">{boardGame.title}</h3>
      </div>
    </Link>
  );
};
