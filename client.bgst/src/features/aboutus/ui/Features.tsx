export const Features = () => {
  return (
    <section id="features" className="bg-swhite-300  py-16 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl  mb-8 text-swhite-950">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-swhite-950">
          <div className="bg-swhite-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl  mb-2">Game Tracking</h4>
            <p className="text-swhite-700">
              Easily log your game sessions and keep track of winners, scores,
              and other stats.
            </p>
          </div>
          <div className="bg-swhite-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl mb-2">Player Profiles</h4>
            <p className="text-swhite-700">
              Maintain profiles for each player with historical performance and
              scores.
            </p>
          </div>
          <div className="bg-swhite-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl  mb-2">Statistics Dashboard</h4>
            <p className="text-swhite-700">
              View comprehensive stats with charts and graphs to analyze
              performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
