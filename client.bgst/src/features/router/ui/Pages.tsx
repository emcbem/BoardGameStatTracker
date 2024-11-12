import { Route, Routes } from "react-router-dom"
import { HomePage } from "../../Home/ui/HomePage"
import { AboutUsPage } from "../../aboutus/ui/AboutUsPage"


export const Pages = () => {
  return (
    <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path="/aboutus" element={<AboutUsPage/>}/>
    </Routes>
  )
}
