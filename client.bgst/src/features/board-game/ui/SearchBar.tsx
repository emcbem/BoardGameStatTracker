import { TextInput } from "../../shared/ui/TextInput"
import { SearchRequestController } from "../types/search-request"

export const SearchBar = ({controller}: {controller: SearchRequestController}) => {
  return (
        <div className="mb-4">
          <TextInput input={controller.searchRequest.name} setInput={(input: string) => controller.setSearchRequest(x => ({
            ...x,
            name: input
          }))} placeholder={"Search..."} />
        </div>
  )
}
