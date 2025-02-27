import { Route, Routes } from "react-router-dom"
import { AboutUsPage } from "../../aboutus/ui/AboutUsPage"
import { HomePage } from "../../home/ui/HomePage"
import { BoardGameSearchPage } from "../../board-game/ui/BoardGameSearchPage"
import { ViewBoardGame } from "../../individual-board-game/ui/ViewBoardGame"
import { ViewCollection } from "../../collection/ui/ViewCollection"
import { ViewFriends } from "../../friends/ui/ViewFriends"
import { ViewFriendRequests } from "../../friends/ui/ViewFriendRequests"
import { PlayGame } from "../../play-board-game/ui/PlayGame"
import { RandomGamePage } from "../../random/ui/RandomGamePage"
import { GameStatsPage } from "../../stats/ui/GameStatsPage"


export const Pages = () => {
  return (
    <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/boardgames" element={<BoardGameSearchPage/>}/>
        <Route path="/boardgames/:query" element={<BoardGameSearchPage/>}/>
        <Route path="/view-boardgame/:boardgameId" element={<ViewBoardGame/>}/>
        <Route path="/view-collection" element={<ViewCollection/>}/>
        <Route path="/view-friends" element={<ViewFriends/>}/>
        <Route path="/view-friendRequests" element={<ViewFriendRequests />}/>
        <Route path="/play/:boardgameId" element={<PlayGame />}/>
        <Route path="/random-collection-game" element={<RandomGamePage/>}/>
        <Route path="/stats/:boardGameId" element={<GameStatsPage/>}/>
    </Routes>
  )
}
