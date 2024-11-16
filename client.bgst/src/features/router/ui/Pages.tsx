import { Route, Routes } from "react-router-dom"
import { AboutUsPage } from "../../aboutus/ui/AboutUsPage"
import { HomePage } from "../../home/ui/HomePage"
import { BoardGameSearchPage } from "../../board-game/ui/BoardGameSearchPage"
import { ViewBoardGame } from "../../individual-board-game/ui/ViewBoardGame"
import { ViewCollection } from "../../collection/ui/ViewCollection"


export const Pages = () => {
  return (
    <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/boardgames" element={<BoardGameSearchPage/>}/>
        <Route path="/boardgames/:query" element={<BoardGameSearchPage/>}/>
        <Route path="/view-boardgame/:boardgameId" element={<ViewBoardGame/>}/>
        <Route path="/view-collection" element={<ViewCollection/>}/>

    </Routes>
  )
}
