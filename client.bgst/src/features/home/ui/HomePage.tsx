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

      <section id="features" className="bg-bgst-100  py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl  mb-8 text-bgst-900">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-swhite-950">
            <div className="bg-swhite-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl  mb-2">
                Game Tracking
              </h4>
              <p className="text-swhite-700">
                Easily log your game sessions and keep track of winners, scores,
                and other stats.
              </p>
            </div>
            <div className="bg-swhite-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl mb-2">Player Profiles</h4>
              <p className="text-swhite-700">
                Maintain profiles for each player with historical performance
                and scores.
              </p>
            </div>
            <div className="bg-swhite-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl  mb-2">
                Statistics Dashboard
              </h4>
              <p className="text-swhite-700">
                View comprehensive stats with charts and graphs to analyze
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-swhite-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl mb-8 text-swhite-950">
            About BoardGameStat Tracker
          </h3>
          <p className="text-swhite-700 max-w-3xl mx-auto">
            BoardGameStat Tracker is an intuitive tool designed for board game
            enthusiasts. Track every game session, analyze player performances,
            and store valuable stats for future reference. Whether you’re a
            casual gamer or a competitive strategist, BoardGameStat Tracker
            makes it easy to stay on top of your games.
          </p>
        </div>
      </section>

      <section id="get-started" className="bg-bgst-500 text-bgst-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl  mb-4">
            Ready to Level Up Your Game Tracking?
          </h3>
          <p className="mb-8">
            Sign up today and start tracking your stats with ease.
          </p>
          <a
            href="#"
            className="bg-bgst-50 text-bgst-500 px-6 py-3 rounded-lg  hover:bg-bgst-100 hover:text-bgst-600"
          >
            Sign Up
          </a>
        </div>
      </section>

      
    </>
  );
};
