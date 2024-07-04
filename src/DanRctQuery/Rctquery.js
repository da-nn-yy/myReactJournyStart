import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {Contact} from './pages/Contact';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';


const RctQu = () => {

  const client = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>Page not Found</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>

    </div>
  )
}

export default RctQu
