import React from 'react'
import "./navbar_top.scss"
import images from "../assets/index"

const NavbarTop = () => {
  return (

    <div className="navbar-top-big">
      {/* <div className="navbar-media">
      <div className="img">
       <img src= {images.logo} alt="logo" />
       </div>
       <i className="fa-solid fa-phone"></i>

       <h1>
        <i className="fa-solid fa-location-dot"></i>
          Ташкент
        </h1>
      </div> */}
    <div className="navbar-top">
        <h1>
        <i className="fa-solid fa-location-dot"></i>
          Ташкент
        </h1>
        <div className="fazo_about">
            <ul>
                <li>Наши магазины </li>
                <li>B2B продажи </li>
                <li>Покупка в рассрочку </li>
                <li>Способы оплаты </li>
                <li>Гарантия на товары </li>
               
            </ul>
        </div>
        <div className="contact">
        <i className="fa-solid fa-phone"></i>
        <p>+998 95 123 55 88</p>
        </div>
        <select >
            <option value="Рус">Рус</option>
            <option value="">Eng</option>
            <option value="Uzb">Uzb</option>
        </select>
      </div>
      </div>
  )
}

export default NavbarTop