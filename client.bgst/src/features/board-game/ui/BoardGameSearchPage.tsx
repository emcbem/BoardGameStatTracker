import { useParams } from "react-router";
import { SidebarFilter } from "./SidebarFilter";
import { useSearchRequest } from "../hooks/useSearchRequest";
import { SelectOrder } from "./SelectOrder";
import { SearchBar } from "./SearchBar";
import { BoardGame } from "../types/board-game";
import { Page } from "../types/page";
import { useInfiniteQuery } from "@tanstack/react-query";
import { BoardGameService } from "../services/BoardGame";
import { BoardGameKeys } from "../tan-stack/BoardGameKeys";
import { SearchRequest } from "../types/search-request";
import { BoardGameCard } from "./BoardGameCard";
import { SmallFilter } from "./SmallFilter";

export const BoardGameSearchPage = () => {
  const { query } = useParams();

  const searchRequestController = useSearchRequest(query);

  const { data, isLoading, isError, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Page<BoardGame>>({
      queryKey: BoardGameKeys.Search(searchRequestController.searchRequest), // Unique key for the query
      queryFn: ({ pageParam = 0 }) =>
        BoardGameService.SearchGames({
          ...searchRequestController.searchRequest,
          page: pageParam,
        } as SearchRequest),
      getNextPageParam: (lastPage) =>
        lastPage.hasNextPage ? lastPage.pageNumber + 1 : null,
      getPreviousPageParam: (firstPage) =>
        firstPage.pageNumber == 1 ? 1 : firstPage.pageNumber - 1,
      initialPageParam: 0,
    });

  return (
    <div className="flex min-h-screen bg-swhite-100 p-6">
      <SidebarFilter controller={searchRequestController} />

      <div className="w-full sm:pb-6 sm:pr-6 sm:ps-6">
        <SearchBar controller={searchRequestController} />

        <div className="flex justify-around mb-4">
          <SmallFilter/> 
          <SelectOrder controller={searchRequestController} />
        </div>

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data.</p>}
        <div className="grid xl:grid-cols-2 xxl:grid-cols-3 grid-cols-1 gap-4">
          {data?.pages
            ?.flatMap((page) => page.data)
            .map((boardGame, index) => (
              <BoardGameCard key={index} boardGame={boardGame}/>
            ))}
        </div>

        {hasNextPage && (
          <button
            onClick={() => fetchNextPage()}
            className="mt-4 p-2 w-full bg-bgst-500 text-swhite-50 rounded"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
