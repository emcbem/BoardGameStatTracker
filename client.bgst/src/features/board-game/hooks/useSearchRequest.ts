import { useState } from "react"
import { SearchRequest, SearchRequestController } from "../types/search-request"



export const useSearchRequest = (query: string | undefined) => {
  const [searchRequest, setSearchRequest] = useState<SearchRequest>({
    pageCount: 12,
    page: 0,
    name: query} as SearchRequest)
  return {
    searchRequest,
    setSearchRequest
  } as SearchRequestController
}
