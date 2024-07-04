import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {Contact} from './pages/Contact';


const RctQu = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>Page not Found</h1>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default RctQu
