import { BoardGame } from "../types/board-game";
import classes from "./BoardGame.module.scss";

export const BoardGameCard = ({ boardGame }: { boardGame: BoardGame }) => {
  return (
    <div>

    <div className={''}>
      <img
        src={boardGame.imageUrl}
        alt={boardGame.title}
        className={`w-full h-[500px] rounded-full mb-4 object-contain  ${classes['inset-image']}`}
        />
        </div>
      <h4 className="text-xl mb-2">{boardGame.title}</h4>
        </div>
  );
};
