import { BoardGame } from "../types/board-game";
import classes from "./BoardGame.module.scss";

export const BoardGameCard = ({ boardGame }: { boardGame: BoardGame }) => {
  return (
    <div className="w-[300px]">
      <div className={`${classes["inset-container"]}`}>
        <img
          src={boardGame.imageUrl}
          className={`${classes["inset-image"]}`}
        ></img>
      </div>
      <span className="break-words">{boardGame.title}</span>
    </div>
  );
};
