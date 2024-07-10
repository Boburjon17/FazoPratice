import React from 'react'
import images from '../assets/index'
import "./footer.scss"

const Footer = () => {
  return (

    <div className="footer-big">
    <div  className='footer' >

     <div className="footer-img">
        <img src={images.logoFooter} alt="" />
       <div className="service">
       <h1>График работы колл-центра</h1>
        <h1>Понедельник - Суббота: 9:00–18:00</h1>
       </div>

       <div className="call-center">
        <p>Колл-центр: </p>
        <p> + 998 (71) 205-93-93</p> 
       </div>
        <div className="icon">
            <div className="link">
            <i className="fa-brands fa-telegram"></i>
            </div>

            <div className="link">
            <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="link">
            <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="link">
            <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
     </div>
     <div className="footer-lists">
     <div className="list">
        <h1>Категории</h1>
        <p>Ноутбуки</p>
        <p>Игровые кресла</p>
        <p>Телефоны</p>
        <p>Моноблоки</p>
        <p>Модули памяти</p>
        
         </div>

         <div className="list">
        <h1>Общее</h1>
        <p>Новости</p>
        <p>О нас</p>
        <p>Наши магазины</p>
        <p>Политика конфиденциальности</p>
        <p>Правила программы лояльности</p>
        <p>Контакты</p>
        
         </div>

         <div className="list">
        <h1>Покупателям</h1>
        <p>Покупка в рассрочку</p>
        <p>Доставка и оплата</p>
        <p>Правила покупок с cashback</p>
        <p>Возврат / Обмен</p>
        <p>Правила пользования купонами</p>
        
         </div>
     </div>

    </div>
    </div>
  )
}

export default Footer