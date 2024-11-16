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
import { Link } from "react-router-dom";

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

        <SelectOrder controller={searchRequestController} />

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data.</p>}
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
          {data?.pages
            ?.flatMap((page) => page.data)
            .map((boardGame, index) => (
              <Link
                to={`/view-boardgame/${boardGame.id}`}
                key={index}
                className="p-4 bg-swhite-50 rounded-lg shadow-md hover:shadow-lg transition flex flex-col"
              >
                <div className=" bg-swhite-200 rounded-md flex justify-center">
                  <img
                    src={boardGame.imageUrl}
                    className="h-[250px] sm:h-[400px]  rounded-md object-contain"
                  ></img>
                </div>
                <div className="flex justify-center">
                  <h3 className="text-md font-semibold truncate">
                    {boardGame.title}
                  </h3>
                </div>
              </Link>
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
