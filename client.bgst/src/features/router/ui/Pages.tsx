import { Route, Routes } from "react-router-dom"
import { BoardGamePage } from "../../board-game-page/ui/BoardGamePage"
import { HomePage } from "../../home/ui/HomePage"


export const Pages = () => {
  return (
    <Routes>
        <Route path = "/boardgames" element={<BoardGamePage/>}/>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
  )
}
