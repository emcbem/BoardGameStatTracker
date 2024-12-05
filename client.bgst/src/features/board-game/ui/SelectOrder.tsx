import { SearchRequestController } from "../types/search-request";

export const SelectOrder = ({controller} : {controller: SearchRequestController}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <label className="block text-sm text-darkness-700 mr-2">
        Order By:
      </label>
      <select
        value={controller.searchRequest.order}
        onChange={(e) => controller.setSearchRequest(x => ({
            ...x,
            order: Number(e.target.value)
        }))}
        className="p-2 rounded-md bg-swhite-50 border-swhite-300 shadow-sm focus:border-bgst-500 focus:ring-bgst-500"
      >
        <option value="0">A-Z</option>
        <option value="1">Z-A</option>
        <option value="2">Release Date (Desc)</option>
      </select>
    </div>
  );
};
