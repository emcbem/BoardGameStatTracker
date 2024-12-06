import { Link } from "react-router-dom";
import { BoardGame } from "../types/board-game";
import classes from "./BoardGame.module.scss";

export const BoardGameScrollCard = ({ boardGame }: { boardGame: BoardGame }) => {
  return (
    <Link className="w-[500px]" to={`/view-boardgame/${boardGame.id}`} >
      <div className="flex items-center justify-center ">
        <div className="min-w-[500px] max-w-[500px]  flex justify-center">
          <img
            src={boardGame.imageUrl}
            alt={boardGame.title}
            className={`h-[300px] mb-4 rounded-sm object-contain ${classes["inset-image"]}`}
          />
        </div>
      </div>
      <h4 className="text-xl text-center">{boardGame.title}</h4>
    </Link>
  );
};
