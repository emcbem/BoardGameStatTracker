import { SearchRequestController } from "../types/search-request";
import RangeSlider from "./RangeSlider";

export const SidebarFilter = ({
  controller,
}: {
  controller: SearchRequestController;
}) => {
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
    <div className="w-[250px] p-4 bg-white rounded-lg shadow hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="">
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
    </div>
  );
};
