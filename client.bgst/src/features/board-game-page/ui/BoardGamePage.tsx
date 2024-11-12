import { useAuth } from "react-oidc-context";
import { callAuthEndpoint } from "../../authentication/services/user-service";
import { useEffect, useRef, useState } from "react";
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

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data!.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [data]);

  // Carousel item style to translate based on index
  const getTranslateStyle = () => ({
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: "transform 0.5s ease-in-out",
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <section className="bg-white py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Search for Board Games
          </h2>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search board games..."
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-700 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>
      </section>
      <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex"
            style={getTranslateStyle()}
          >
            {data && data.map((item) => (
              <div key={item.id} className="min-w-full flex-shrink-0">
                <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
                  <BoardGameCard boardGame={item}/>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};
