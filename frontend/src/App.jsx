import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Cart from './pages/cart/Cart.jsx'
import Placeorder from './pages/placeorder/Placeorder.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Order' element={<Placeorder/>} />
      </Routes>

    </div>
  )
}

export default App