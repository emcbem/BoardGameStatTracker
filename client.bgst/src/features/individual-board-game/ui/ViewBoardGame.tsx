import { useParams } from "react-router";
import { BoardGameQueries } from "../../board-game/tan-stack/BoardGameQueries";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { useAddGameToCollection } from "../../collection/tan-stack/useAddGameToCollection";
import { useAuth } from "react-oidc-context";

export const ViewBoardGame = () => {
  const auth = useAuth();
  const { boardgameId } = useParams();
  const { data: game, isError } = BoardGameQueries.useGetSpecificGame(
    Number.parseInt(boardgameId ?? "")
  );
  const userContext = useUserContext();
  const addGame = useAddGameToCollection(userContext?.id_token ?? "");

  const gameInCollection = () => {
    return !!userContext.user?.collectionItems?.some(
      (c) => c.boardGame.id === game?.id
    );
  };

  if (isError) {
    return <div>Error</div>;
  }

  if (!game) {
    return <div>Loading...</div>;
  }

  function handleCollectionAdd(gameId: number): void {
    if (userContext.user) {
      return addGame.mutate({
        id_token: userContext?.id_token ?? "",
        gameId: gameId,
      });
    }
    auth.signinRedirect();
  }

  return (
    <div className="max-w-3xl mx-auto my-10 bg-swhite-50 shadow-lg rounded-lg overflow-hidden">
      <img
        src={game.imageUrl}
        alt={game.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-center">
          <div className="flex flex-col justify-items-center">
            <h2 className="text-3xl font-bold text-center text-swhite-950 mb-2">
              {game.title}
            </h2>
            <p className="text-swhite-500 text-sm mb-6">
              Published in {game.yearPublished}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-around">
          <div className=" flex justify-around">
            <div className="text-swhite-900 pb-3">
              <span className="font-semibold">
                {game.minPlayers} - {game.maxPlayers}
              </span>{" "}
              players
            </div>
            <div className="text-swhite-900 pb-3">
              <span className="font-semibold">
                {" "}
                {game.minEstimatedPlayTimeMinutes} -{" "}
                {game.maxEstimatedPlayTimeMinutes}{" "}
              </span>
              minutes
            </div>
            <div className="text-swhite-900 pb-3">
              <span className="font-semibold">Age:</span> {game.age}+ years
            </div>
          </div>
          <p className="text-swhite-900 mb-6">{game.description}</p>
        </div>

        {(!userContext.user || !gameInCollection()) && (
          <button
            onClick={() => handleCollectionAdd(game.id)}
            className="w-full outline outline-2 outline-darkness-400 bg-darkness-100 hover:outline-none text-darkness-700 font-bold py-2 px-4 rounded hover:bg-darkness-300 hover:text-darkness-900 transition-colors"
          >
            {userContext.user
              ? "Add to Collection"
              : "Login to add to collection"}
          </button>
        )}

        {gameInCollection() && (
          <button className="w-full bg-green-500 text-green-50 font-bold py-2 px-4 rounded cursor-not-allowed">
            In Your Collection
          </button>
        )}
      </div>
    </div>
  );
};