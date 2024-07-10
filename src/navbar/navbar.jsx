import React from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";
import images from '../assets/index'


const Navbar = () => {
  return (
    <nav className="nav">
     
      <div className="navbar-medium">
       <div className="img">
       <img src= {images.logo} alt="logo" />
       </div>
        <div className="input">
            <select > 
                <option value="Все категории">Все категории</option>
            </select>
            <p>|</p>
            <input type="text" placeholder="Телефоны и бытовая" />
            <i className="fa-solid fa-microphone"></i>
            
            <button>
            <i className="fa-solid fa-magnifying-glass"></i>
                Поиск
                </button>

        </div>
        <div className="deeds">
            <div className="user">
            <i className="fa-solid fa-user"></i>
            <p>Войти</p>
            </div>
            <div className="scales">
            
            <div className="number-scales">
            <i className="fa-solid fa-scale-balanced"></i>
                <p>1</p></div>
            <p>Сравнение</p>
            </div>
            <div className="heart">
            
            <div className="number-heart">
            <i className="fa-regular fa-heart"></i>
                <p>1</p>
            </div>
            <p>Избранное</p>
            </div>
            <div className="shop">
            
            <div className="number-shop">
                <i className="fa-solid fa-cart-shopping"></i>

                <p>1</p>
            </div>
            <p>Корзина</p>
            </div>
        </div>
      </div>
      < div className="navbar-bottom">
    
      <button>
        <i className="fa-solid fa-list-ul"></i>
        <p>Категории</p>
        </button>
      
        <ul>
          <li><Link to={"/"} >Наши магазины</Link></li>
          <li>Моноблоки</li>
          <li>Телефоны, планшеты</li>
          <li>Ноутбуки</li>
          <li>Комплектующие</li>
          <li>Сетевое оборудование</li>
          <li>Оргтехника</li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
