import { SearchRequestController } from "../types/search-request"

export const SearchBar = ({controller}: {controller: SearchRequestController}) => {
  return (
        <div className="mb-4">
          <input
            type="text"
            value={controller.searchRequest.name}
            onChange={(e) => controller.setSearchRequest(x => ({
                ...x,
                name: e.target.value
            }))}
            placeholder="Search..."
            className="w-full p-2 rounded-md border-swhite-300 shadow-sm focus:outline-bgst-500 focus:border-bgst-500 focus:ring-bgst-500 "
          />
        </div>
  )
}
