import { useState } from "react";
import { SearchRequestController } from "../types/search-request";
import RangeSlider from "./RangeSlider";

export const SmallFilter = ({
  controller,
}: {
  controller: SearchRequestController;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleRangeChange = (min: number, max: number) => {
    controller.setSearchRequest((x) => ({
      ...x,
      minPlaytime: min,
      maxPlaytime: max,
    }));
  };

  const handlePlayerChange = (min: number, max: number) => {
    controller.setSearchRequest((x) => ({
      ...x,
      minPlayers: min,
      maxPlayers: max,
    }));
  };

  return (
    <div className="relative">
      <button
        className="rounded bg-swhite-50 p-2 shadow-sm block md:hidden"
        onClick={handleToggle}
      >
        Filters
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-[300px] p-4 bg-white rounded-lg z-50 block md:hidden">
          <RangeSlider
            min={0}
            max={300}
            step={15}
            onChange={handleRangeChange}
            title="Select Playtime"
            description="Minutes"
          />
          <div className="mt-4">
            <RangeSlider
              min={0}
              max={10}
              step={1}
              onChange={handlePlayerChange}
              title="Select Players"
              description="Players"
            />
          </div>
        </div>
      )}
    </div>
  );
};
