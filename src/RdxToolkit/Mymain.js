import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import {Home} from './Pages/Home';
import {Login} from './Pages/Login';
import {Contact} from './Pages/Contact';

const Mymain = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Mymain
