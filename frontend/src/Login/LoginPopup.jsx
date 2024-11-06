import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const[currState , setCurrState] = useState("Đăng nhập")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Đăng nhập"?<></>:<input type="text" placeholder='Họ và Tên ' required />}
                <input type="email" placeholder='Email' required />
                <input type="password" placeholder='Mật khẩu' required/>

            </div>
            <button>{currState==="Đăng ký"?"Tạo tài khoản":"Đăng nhập"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>tôi đồng ý với điều khoản sử dụng và chính sách bảo mật</p>
            </div>
            {currState==="Đăng nhập"
            ?<p>Tạo tài khoản mới ? <span onClick={()=>setCurrState("Đăng ký")}>Ấn vào đây</span></p>
            :<p>Đã có tài khoản ? <span onClick={()=>setCurrState("Đăng nhập")}>Đăng nhập</span></p>
        }
        </form>
    </div>
  )
}

export default LoginPopup