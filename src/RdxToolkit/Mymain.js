import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import {Home} from './Pages/Home';
import {Login} from './Pages/Login';
import {Contact} from './Pages/Contact';
import { Provider } from "react-redux";
import store from "./store";

const Mymain = () => {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      </Provider>
    </div>
  )
}

export default Mymain
