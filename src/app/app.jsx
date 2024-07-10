import React from 'react'
import { Footer, Home, Navbar, NavbarTop } from '../indexs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 


const app = () => {
  return (
    <>
     

      <BrowserRouter>
      <NavbarTop />
      <Navbar/>
    
      
       <Routes>
        <Route path='/'  element= {<Home/>} />
       </Routes>
        <Footer/>
      
      
      </BrowserRouter>
    
    </>
  )
}

export default app