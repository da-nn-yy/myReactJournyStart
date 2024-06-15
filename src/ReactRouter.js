import { BrowserRouter as Router, Routes,Route ,Link } from "react-router-dom";
import ExcuseFetchExe from "./ExcuseFectchExe"
import Fetching from "./Fetching"
import Fetchingg from "./Fetchingg"

const ReactRouter = () => {
  return (
    <Router>
      <div style={{display:"flex", justifyContent:"space-around", marginBottom:"3rem"}}>
        <Link to="/">Home</Link>
        <Link to="/Excuse">Excuse</Link>
        <Link to="/Fetching1">Fetching</Link>
        <Link to="/Fetching2">Fetchingg</Link>
      </div>
      <Routes>
        <Route path="/" element={<h1>HI</h1>}/>
        <Route path="/Excuse" element={<ExcuseFetchExe/>}/>
        <Route path="/Fetching1" element={<Fetching/>}/>
        <Route path="/Fetching2" element={<Fetchingg/>}/>
        <Route path="*" element={<h1>Page not found</h1>}/>
      </Routes>
    </Router>

  )
}

export default ReactRouter;