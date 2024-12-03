import { Link } from "react-router-dom";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { BoardGameCard } from "../../board-game/ui/BoardGameCard";
import { EmptyContent } from "../../shared/ui/EmptyContent";
import { LoadingScreen } from "../../shared/ui/LoadingScreen";

export const ViewCollection = () => {
  const user = useUserContext();

  if (!user.user) {
    return (
      <div className="flex flex-col items-center">
        <LoadingScreen />
      </div>
    );
  }

  const collectionDoesntExist =
    user.user.collectionItems && user.user.collectionItems.length == 0;

  return (
    <>
      <div className="max-w-5xl mx-auto my-10 px-4">
        <h1 className="text-4xl font-bold text-darkness-800 text-center mb-8">
          Your Board Game Collection
        </h1>
        {!collectionDoesntExist && (
          <p className="text-darkness-600 text-center mb-12">
            Explore all your collected games in one place! <br></br> Want to
            choose a random game? Click{" "}
            <Link to="/random-collection-game" className="underline">
              Here
            </Link>
          </p>
        )}

        {!collectionDoesntExist && (
          <div
            className={`grid ${
              user.user.collectionItems.length === 1
                ? "justify-center items-center max-w-md mx-auto"
                : "grid-cols-1 sm:grid-cols-2"
            } gap-6 bg-swhite-100 p-6 rounded-lg shadow-md`}
          >
            {user.user.collectionItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 shadow-lg rounded-lg w-full overflow-hidden box-border"
              >
                <div className="overflow-hidden transition-transform transform hover:scale-105">
                  <BoardGameCard boardGame={item.boardGame} />
                </div>
                <div className="flex flex-row gap-3 align-baseline">
                  <Link
                    to={`/play/${item.boardGame.id}`}
                    className="bg-bgst-400 text-bgst-50 w-full text-center hover:bg-bgst-500 shadow-md hover:shadow-lg font-semibold px-2 py-3 mt-3 rounded-lg"
                  >
                    Play
                  </Link>
                  <Link
                    to={`/stats/${item.boardGame.id}`}
                    className="py-3 bg-bgst-50 text-bgst-500 underline hover:bg-bgst-100 hover:text-bgst-600 duration-500 transition-colors w-fit font-semibold px-2 mt-3 rounded-lg"
                  >
                    Stats
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {collectionDoesntExist && (
          <>
            <EmptyContent content="No Games In Collection" />
          </>
        )}
        <div></div>
      </div>
    </>
  );
};
