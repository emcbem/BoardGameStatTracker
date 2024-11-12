import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { SearchForGame } from "./SearchForGame";
import { ScrollingGames } from "./ScrollingGames";


export const HomePage = () => {
  return (
    <div>
      <section id="header" className="bg-swhite-100 py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center mb-4 text-swhite-900">
            Search through thousands of games!
          </h2>
          <div className="flex justify-center">
            <SearchForGame/>
          </div>
        </div>
      </section>
      
      <ScrollingGames/>

      <section className="bg-swhite-100 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2 pb-5">
            <div className="w-[30px] h-[30px]">
              <MagnifyingGlassIcon className="fill-swhite-900" />
            </div>
            <h2 className="text-3xl text-swhite-900">Find Fan Favorites</h2>
          </div>

          <p className="text-center">
            Discover what everyone’s loving! Our Fan Favorites showcase the most
            popular picks, loved and rated highly by fans just like you. Explore
            trending items, top-rated choices, and seasonal must-haves to find
            your next favorite today!
          </p>
        </div>
      </section>
      <section className="bg-swhite-200 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2 pb-5">
            <h2 className="text-3xl text-swhite-900">Sort by many filters</h2>
            <div className="w-[30px] h-[30px]">
              <AdjustmentsHorizontalIcon className="fill-swhite-900" />
            </div>
          </div>
          <p className="text-center">
            Find exactly what you're looking for with advanced sorting! Filter
            games by category, difficulty, playtime, age range, or number of
            players to match your perfect play style. Whether you’re after a
            quick solo game or a challenging strategy for game night, our
            filters help you discover just the right fit.
          </p>
        </div>
      </section>
    </div>
  );
};
