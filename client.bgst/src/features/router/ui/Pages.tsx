import { Route, Routes } from "react-router-dom"
import { BoardGamePage } from "../../board-game-page/ui/BoardGamePage"


export const Pages = () => {
  return (
    <Routes>
        <Route path = "/boardgames" element={<BoardGamePage/>}/>
    </Routes>
  )
}
