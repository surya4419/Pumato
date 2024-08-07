import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets.js'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo' alt="" />
        <img src={assets.profile_image} className='profile' alt="" />
    </div>
  )
}


export default Navbar