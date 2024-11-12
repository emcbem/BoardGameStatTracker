import { About } from "./About";
import { Features } from "./Features";
import { GetStarted } from "./GetStarted";

export const HomePage = () => {
  return (
    <>
      <section className="bg-swhite-100 text-center py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl  mb-4 text-darkness-800">
            Track Your Board Game Stats Easily
          </h2>
          <p className="text-darkness-500 mb-8">
            BoardGameStat Tracker helps you track your game sessions, player
            stats, and progress with ease!
          </p>
          <a
            href="#get-started"
            className="bg-bgst-700 text-swhite-200 px-6 py-3 rounded-lg  hover:bg-bgst-400"
          >
            Get Started
          </a>
        </div>
      </section>

      <Features/>

      <About/>

      <GetStarted/>
    </>
  );
};
