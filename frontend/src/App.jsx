import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'

const App = () => {

  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<Login/>:<></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
