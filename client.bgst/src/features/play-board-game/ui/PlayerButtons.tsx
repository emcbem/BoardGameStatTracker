import { MinusCircleIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { PlayerControllerContext } from "../context/PlayerControllerContext";
import { useModalController } from "../../shared/hooks/useModalController";
import { Modal } from "../../shared/ui/Modal";
import { useDropdownSelect } from "../../shared/hooks/useDropdownSelect";
import { Friend } from "../../friends/types/friend";
import { DropdownSelect } from "../../shared/ui/DropdownSelect";

export const PlayerButtons = ({ index }: { index: number }) => {
  const controller = useContext(PlayerControllerContext);
  const currentPlayer = controller.players.find((_, i) => i == index);
  const playerDropdownSelect = useDropdownSelect(
    controller.friends ?? [],
    (friend: Friend) => friend.user.username,
    () => {}
  );
  console.log(controller.friends);
  const noFriends = controller.friends?.length == 0;
  const modalController = useModalController(
    "Choose Player To Link",
    <>
      <p>
        This will let you link other users to this game you have played. This
        helps everyone, only one person needs to set up the played game. Doing
        this will make it so that you cannot change the users name. Evrything
        else will work the same
      </p>
      {noFriends ? (
        <p className="text-red-800">You sadly have no friends to link</p>
      ) : (
        <DropdownSelect controller={playerDropdownSelect} />
      )}
    </>,
    () => {},
    () => {
      if (!noFriends) {
        console.log(playerDropdownSelect);
        controller.handleLinkPlayer(
          index,
          playerDropdownSelect.selectedOption?.user.id,
          playerDropdownSelect.selectedOption?.user.username
        );
      }
    }
  );

  const unlinkedStyles =
    "bg-bgst-500 text-bgst-50 stroke-bgst-50 hover:stroke-bgst-100  hover:bg-bgst-600";
  const linkedStyles =
    "bg-green-500 stroke-green-50 hover:stroke-red-500 hover:bg-red-100";

  const currentStyles = currentPlayer?.linked ? linkedStyles : unlinkedStyles;

  return (
    <>
      <button
        onClick={() =>
          (!currentPlayer?.linked && modalController.setOpen(true)) ||
          (currentPlayer?.linked && controller.handleLinkPlayer(index, 0))
        }
        title="Link a player"
        className={`w-3/5 h-full px-2 py-1 hover:scale-105 
            transition-all  
            rounded flex items-center justify-center ${currentStyles}`}
      >
        <LinkIcon className="w-5 h-5 stroke-inherit" />
      </button>
      <button
        disabled={controller.players.length == controller.minPlayers}
        onClick={() => controller.removePlayer(index)}
        className="
        bg-red-500 text-white w-2/5 h-full px-2 py-1 hover:scale-105 stroke-red-50 
        hover:stroke-red-100 transition-all hover:bg-red-400 rounded flex items-center justify-center
        disabled:hover:scale-100 disabled:bg-red-100 disabled:hover:stroke-red-50"
      >
        <MinusCircleIcon className="w-5 h-5 stroke-inherit" />
      </button>
      <Modal controller={modalController} />
    </>
  );
};
