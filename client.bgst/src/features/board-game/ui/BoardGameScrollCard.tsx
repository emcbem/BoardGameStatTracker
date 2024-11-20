import { BoardGame } from "../types/board-game";
import classes from "./BoardGame.module.scss";

export const BoardGameScrollCard = ({ boardGame }: { boardGame: BoardGame }) => {
  return (
    <div className="w-[500px]">
      <div className="flex items-center justify-center ">
        <div className="w-auto">
          <img
            src={boardGame.imageUrl}
            alt={boardGame.title}
            className={`h-[300px] mb-4 rounded-sm object-contain ${classes["inset-image"]}`}
          />
        </div>
      </div>
      <h4 className="text-xl text-center">{boardGame.title}</h4>
    </div>
  );
};
