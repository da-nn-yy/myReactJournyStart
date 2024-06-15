import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import ExcuseFetchExe from "./ExcuseFectchExe"
import Fetching from "./Fetching"
import Fetchingg from "./Fetchingg"

const ReactRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>HI</h1>}/>
        <Route path="/Excuse" element={<ExcuseFetchExe/>}/>
        <Route path="/Fetching1" element={<Fetching/>}/>
        <Route path="/Fetching2" element={<Fetchingg/>}/>
      </Routes>
    </Router>

  )
}

export default ReactRouter;