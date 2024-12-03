import React from "react";
import { BoardGameStatCharts } from "./BoardGameStatCharts";
import { useUserContext } from "../../authentication/hooks/useUserContext";
import { PlayQueries } from "../../play-board-game/tan-stack/PlayQueries";
import { useParams } from "react-router";

export const GameStatsPage: React.FC = () => {
  const { boardGameId } = useParams();
  const boardGameNumber = Number.parseInt(boardGameId ?? "");
  const user = useUserContext();
  const { data: gameStats } = PlayQueries.useGetUserGameStats(
    user.id_token ?? "",
    boardGameNumber
  );

  const hasData =
    gameStats?.timesPlayed || gameStats?.averageScore || gameStats?.averageRank;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 text-gray-800">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          {gameStats?.boardGame?.title || "Game Stats"}
        </h1>
        <p className="text-lg text-gray-600">Game Statistics Overview</p>
      </div>

      {hasData ? (
        <>
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Key Stats</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-gray-700">
                  {gameStats?.timesPlayed}
                </span>
                <span className="text-sm text-gray-500">Times Played</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-gray-700">
                  {gameStats?.averageScore?.toFixed(1)}
                </span>
                <span className="text-sm text-gray-500">Average Score</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold text-gray-700">
                  {gameStats?.averageRank?.toFixed(1)}
                </span>
                <span className="text-sm text-gray-500">Average Rank</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <BoardGameStatCharts gameStats={gameStats} />
          </div>
        </>
      ) : (
        <div className="text-center bg-swhite-50 shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">No Data Available</h2>
          <p className="text-swhite-600 ">
            There are no statistics available for this game yet. Start playing to generate stats!
          </p>
        </div>
      )}
    </div>
  );
};
