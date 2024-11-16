import { BoardGameQueries } from "../../board-game/tan-stack/BoardGameQueries";
import { BoardGameScrollCard } from "../../board-game/ui/BoardGameScrollCard";

export const ScrollingGames = () => {
  const { data } = BoardGameQueries.useGetTop50Games();

  return (
    <section id="scrolling">
      <div className="relative overflow-hidden">
        <div
          className="flex animate-scroll-x bg-repeat-x"
          style={{ width: `${(data ? data.length : 1) * 100}%` }}
        >
          {data &&
            data.map((item) => (
              <div key={item.id} className="flex-shrink-0 bg-swhite-300 pt-3 pb-3 pr-3">
                <div className="bg-swhite-200 p-6 rounded-lg shadow-md text-center">
                  <BoardGameScrollCard boardGame={item} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
