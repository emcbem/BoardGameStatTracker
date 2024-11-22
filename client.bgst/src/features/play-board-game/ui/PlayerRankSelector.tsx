import { useContext } from "react";
import { useDropdownSelect } from "../../shared/hooks/useDropdownSelect";
import { DropdownSelect } from "../../shared/ui/DropdownSelect";
import { PlayerControllerContext } from "../context/PlayerControllerContext";

export const PlayerRankSelector = ({
  index,
}: {
  index: number
}) => {

    const controller = useContext(PlayerControllerContext)

    const currentPlayer = controller.players.find((_, i) => i == index)
    const options=Array.from({length: controller.players.length}, (_, i) => i + 1).filter(
      (x) =>
       currentPlayer?.rank ==
         x ||
       !controller.players.map((x) => x.rank).find((y) => y == x)
   ) 
  const dropdownController = useDropdownSelect<number>(
    options,
    (option: number) => String(option),
    (option: number) => controller.handleRankChange(index, option),
  );

  return <DropdownSelect controller={dropdownController} />;
};
