import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { Home} from './pages/Home';
import Profile from './pages/Profile';
import { Contact} from './pages/Contact';
import { useState } from "react";


export const StateMangeuseCon = () => {
  const [username , setUsername] = useState("Danny");
  return (
    <Router>
      <div style={{display:"flex", justifyContent:"space-around", margin:"2rem"}}>
        <Link to="/Home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home username={username} />}/>
        <Route path="/Home" element={<Home username={username}/>}/>
        <Route path="/Profile" element={<Profile username={username} setUsername={setUsername}/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<h1>Page not Found</h1>}/>
      </Routes>
    </Router>
  )
}