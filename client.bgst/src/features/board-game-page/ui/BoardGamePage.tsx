import { useAuth } from "react-oidc-context";
import { callAuthEndpoint } from "../../authentication/services/user-service";
import { useEffect } from "react";
import { BoardGameQueries } from "../../board-game/tan-stack/BoardGameQueries";
import { BoardGameCard } from "../../board-game/ui/BoardGameCard";

export const BoardGamePage = () => {
  const auth = useAuth();
  useEffect(() => {
    if (auth.user?.id_token) {
      callAuthEndpoint(auth.user?.id_token);
    }
  }, [auth.user?.id_token]);

  const { data, isLoading } = BoardGameQueries.useGetTop50Games();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="container  mx-auto px-4 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="flex flex-wrap  gap-4">
            {data?.map((game, index) => (
              <BoardGameCard boardGame={game} key={index} /> // assuming 'name' is a field in your data
            ))}
        </div>
      </div>
    </div>
  );
};
