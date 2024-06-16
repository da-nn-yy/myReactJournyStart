import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { Home} from './pages/Home';
import { Profile} from './pages/Profile';
import { Contact} from './pages/Contact';


export const PageRouter = () => {
  return (
    <Router>
      <div style={{display:"flex", justifyContent:"space-around", margin:"2rem"}}>
        <Link to="/Home">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>
    </Router>
  )
}