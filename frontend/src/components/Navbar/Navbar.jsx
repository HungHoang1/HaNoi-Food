import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = ({setShowLogin}) => {
    const [menu , setMenu] = useState("home");
  return (
    <div className='Navbar'>
      <img src={assets.logo} alt=""  className='logo'/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Trang chủ</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
        </ul>
      <button onClick={()=>setShowLogin(true)}>Đăng nhập</button>
    </div>
  )
}

export default Navbar
