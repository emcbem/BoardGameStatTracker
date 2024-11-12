import { Route, Routes } from "react-router-dom"
import { AboutUsPage } from "../../aboutus/ui/AboutUsPage"
import { HomePage } from "../../home/ui/HomePage"


export const Pages = () => {
  return (
    <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
    </Routes>
  )
}
