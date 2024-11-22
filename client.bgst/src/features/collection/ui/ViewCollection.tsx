import { Link } from "react-router-dom";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { LoginPage } from "../../authentication/ui/LoginPage";
import { BoardGameCard } from "../../board-game/ui/BoardGameCard";

export const ViewCollection = () => {
  const user = useUserContext();

  if (!user.user) {
    return <LoginPage></LoginPage>;
  }

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <h1 className="text-4xl font-bold text-darkness-800 text-center mb-8">
        Your Board Game Collection
      </h1>
      <p className="text-darkness-600 text-center mb-12">
        Explore all your collected games in one place!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        {user.user.collectionItems.map((item, index) => (
          <div key={index} className="bg-swhite-50 p-3 shadow-lg rounded-lg">
            <div
              className="transition-transform transform "
            >
              <BoardGameCard boardGame={item.boardGame} />
            </div>
            <div className="flex flex-row gap-3 align-baseline">

            <Link to={`/play/${item.boardGame.id}`} className="bg-bgst-400 text-bgst-50 w-full text-center  hover:bg-bgst-500 shadow-md hover:shadow-lg font-semibold px-2 py-3 mt-3 rounded-lg">Play</Link>
            <button className="py-3 text-darkness-500 underline hover:bg-red-50 hover:text-red-600 duration-500 transition-colors w-fit font-semibold px-2 mt-3 rounded-lg">Remove</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
