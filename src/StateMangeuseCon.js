import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import { Home} from './pages/Home';
import Profile from './pages/Profile';
import { Contact} from './pages/Contact';
import { useState , createContext } from "react";

export const AppContext = createContext()
export const StateMangeuseCon = () => {
  const [username , setUsername] = useState("Danny");
  return (
    <AppContext.Provider value={{username,setUsername}}>
      <Router>
        <div style={{display:"flex", justifyContent:"space-around", margin:"2rem", backgroung:"red"}}>
          <Link to="/Home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/Contact">Contact</Link> 
        </div>
        <Routes>
          <Route path="/" element={<Home  />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<h1>404 error</h1>}/>
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}