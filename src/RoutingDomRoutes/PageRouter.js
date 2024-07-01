import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Menu } from "./pagess/Menu";
import { Home } from "./pagess/Home";
import { Contact } from "./pagess/Contact";
import NavBar from "./Navbar";


const PageRouter = () => {
  return (
    <Router>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="*" element={<h1>Page not Found</h1>}/>
        {/* <Route path="/Profiles/:username" element={<Profile/>}/>  A profile page for differet users using "USEPARAMS" */}
      </Routes>
    </Router>
  )
}

export default PageRouter;