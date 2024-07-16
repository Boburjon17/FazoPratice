import React from 'react'
import { Category, Footer, Home, Navbar, NavbarTop } from '../indexs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
 


const app = () => {
  return (
    <>
     

      <BrowserRouter>
      <NavbarTop />
      <Navbar/>
    
      
       <Routes>
        <Route path='/'  element= {<Home/>} />
        <Route path='/category' element={<Category/>} />
       </Routes>
        <Footer/>
      
      
      </BrowserRouter>
    
    </>
  )
}

export default app