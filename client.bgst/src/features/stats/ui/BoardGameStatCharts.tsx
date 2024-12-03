import { GameStats } from "../types/GameStats";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip
);

export const BoardGameStatCharts = ({
  gameStats,
}: {
  gameStats: GameStats | undefined;
}) => {
  if (
    !gameStats ||
    !gameStats.playedGames ||
    gameStats.playedGames.length === 0
  ) {
    return <></>;
  }

  const scoreTrendData = {
    labels: gameStats.playedGames.map((game) =>
      game?.playedDate
        ? new Date(game.playedDate).toLocaleDateString()
        : "Unknown Date"
    ),
    datasets: [
      {
        label: "Score Over Time",
        data: gameStats.playedGames.map((x) => x?.score ?? 0),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const rankCounts = gameStats.playedGames.reduce<Record<number, number>>(
    (acc, game) => {
      if (game?.rank !== undefined) {
        acc[game.rank] = (acc[game.rank] || 0) + 1;
      }
      return acc;
    },
    {}
  );

  const labels = Object.keys(rankCounts).map((rank) => `Rank ${rank}`);
  const data = Object.values(rankCounts);

  const rankDistributionData = {
    labels,
    datasets: [
      {
        label: "Times Achieved",
        data, 
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#cc65fe",
          "#ffce56",
          "#4bc0c0",
        ], 
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Performance Trends</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Score Trend</h3>
        <Line data={scoreTrendData} options={{ responsive: true }} />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Rank Distribution</h3>
        <Bar data={rankDistributionData} options={{ responsive: true }} />
      </div>
    </>
  );
};