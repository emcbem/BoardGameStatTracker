import { Route, Routes } from "react-router-dom"
import { AboutUsPage } from "../../aboutus/ui/AboutUsPage"
import { HomePage } from "../../home/ui/HomePage"
import { BoardGamePage } from "../../board-game/ui/BoardGamePage"


export const Pages = () => {
  return (
    <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
        <Route path="/boardgames" element={<BoardGamePage/>}/>
        <Route path="/boardgames/:query" element={<BoardGamePage/>}/>


    </Routes>
  )
}
