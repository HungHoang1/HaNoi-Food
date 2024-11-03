import React from 'react'
import './Menu.css'
import { menu_list } from '../assets/assets'

const Menu = () => {
  return (
    <div className='Menu' id='Menu'>
        <h1>Những món nên thử khi đến Hà Nội</h1>
        <div className="menu-list">
            {menu_list.map((item , index)=>{
                return (
                    <div key = {index} className='menu-list-item'>
                        <img src={item.menu_image}  alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Menu
