import { useParams } from "react-router-dom";
import { BoardGameQueries } from "../tan-stack/BoardGameQueries";
import { SearchRequest } from "../types/search-request";
import { useState } from "react";

export const BoardGamePage = () => {
  const { query } = useParams();

   const [searchRequest] = useState<SearchRequest>({page: 0, pageCount:15, name: query} as SearchRequest)
  const { data: page, isLoading } = BoardGameQueries.useSearchBoardGames(searchRequest);

  console.log(page);

  return (
    <>
      <div>BoardGamePage</div>
      {isLoading && <p>Loading</p>}
      {!isLoading && page
        ? page.data?.length > 0 && (
            <div>
              {page.data.map((game) => (
                <p key={game.id}>{game.title}</p>
              ))}
            </div>
          )
        : ""}
      {!isLoading && page?.data?.length === 0 && <p>No games found.</p>}
    </>
  );
};
