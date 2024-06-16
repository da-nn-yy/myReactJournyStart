import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { Home} from './pages/Home';
import Profile from './pages/Profile';
import { Contact} from './pages/Contact';


export const PageRouter = () => {
  return (
    <Router>
      <div style={{display:"flex", justifyContent:"space-around", margin:"2rem"}}>
        <Link to="/Home">Home</Link>
        <Link to="/profile">Profile</Link>
        {/* <Link to="/profiles">Profiles</Link> */} {/* using for more profilrs using "useParams" function */}
        <Link to="/Contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        {/* <Route path="/Profiles/:username" element={<Profile/>}/>  A profile page for differet users using "USEPARAMS" */}
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>
    </Router>
  )
}