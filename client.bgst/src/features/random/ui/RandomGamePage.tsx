import { useUserContext } from "../../authentication/hooks/useUserContext";
import { Dice } from "./Dice";
import { SlotMachine } from "./SlotMachine";

export const RandomGamePage = () => {
  const user = useUserContext();

  if (!user.user?.collectionItems) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full from-bgst-400 to-bgst-700  min-h-screen py-10">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <div className="flex flex-row items-center gap-2">
        <Dice/>
        <h1 className="text-4xl font-bold">Spin to Choose a Game!</h1>
        </div>
        <p className="text-lg mt-2">Find your next board game adventure with a spin of the wheel.</p>
      </div>

      {/* Slot Machine Component */}
      <div className="">

      <SlotMachine
        options={user.user.collectionItems.map((x) => x.boardGame)}
        />
        </div>

      {/* Footer or Call-to-Action */}
      <div className="mt-10">
        <p className="text-sm italic">
          Need more games? Update your collection to get new recommendations!
        </p>
      </div>
    </div>
  );
};
