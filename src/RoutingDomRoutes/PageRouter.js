import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Home} from '../pages/Home';
import Profile from '../pages/Profile';
import { Contact} from '../pages/Contact';
import NavBar from "./Navbar";


export const PageRouter = () => {
  return (
    <Router>
     <NavBar/>
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