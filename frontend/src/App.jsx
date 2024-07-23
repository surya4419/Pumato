import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Cart from './pages/cart/Cart.jsx'
import Placeorder from './pages/placeorder/Placeorder.jsx'
import Footer from './components/footer/Footer.jsx'
import Loginpopup from './components/loginpopup/Loginpopup.jsx'

const App = () => {

 const [showLogin,setShowLogin] = useState(false)

  return (
    // if show login is true then loginpopup page will appear, after that it is passed in navbar to know wheather it is true or false
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Order' element={<Placeorder/>} />
      </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App