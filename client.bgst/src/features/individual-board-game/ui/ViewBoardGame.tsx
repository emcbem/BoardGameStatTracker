import { useParams } from "react-router";
import { BoardGameQueries } from "../../board-game/tan-stack/BoardGameQueries";

export const ViewBoardGame = () => {
  const { boardgameId } = useParams();

  const { data: game, isError } = BoardGameQueries.useGetSpecificGame(
    Number.parseInt(boardgameId ?? "")
  );

  if (isError) {
    return (
      <>
        <div>Error</div>
      </>
    );
  }

  if(!game)
  {
    return <>
        Loading
    </>
  }

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xl mx-auto my-10">
            <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-64 object-cover"
            />
            <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-800">{game.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                    Published on: {new Date(game.datePublished).toLocaleDateString()}
                </p>
                {/* <p className="text-gray-700 mb-4">{game.description}</p> */}
                
                <div className="grid grid-cols-2 gap-4 text-gray-700 mb-4">
                    <div>
                        <span className="font-semibold">Players:</span> {game.minPlayers} - {game.maxPlayers}
                    </div>
                    <div>
                        <span className="font-semibold">Play Time:</span> {game.minEstimatedPlayTimeMinutes} - {game.maxEstimatedPlayTimeMinutes} mins
                    </div>
                    <div>
                        {/* <span className="font-semibold">Age Rating:</span> {game.ageRating} */}
                    </div>
                </div>
                
                <div className="mb-4">
                    {/* <h3 className="text-lg font-semibold text-gray-800 mb-2">Mechanics</h3> */}
                    <ul className="list-disc list-inside text-gray-700">
                        {/* {game.mechanics.map((mechanic, index) => (
                            <li key={index}>{mechanic}</li>
                        ))} */}
                    </ul>
                </div>
                
                <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                    Add to Wishlist
                </button>
            </div>
        </div>
    </>
  );
};
