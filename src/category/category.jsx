import React from 'react'
import "./category.scss"
import images from "../assets/index"

const Category = () => {
  return (
    <div className='category'>
      

      <div className="category-left">
        <div className="category-section">
        <div className="left-title">
          <img src={images.cTelefon} alt="" />
          <p>Телефоны, планшеты</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>

        <div className="category-section">
        <div className="left-title">
          <img src={images.cNoutbook} alt="" />
          <p>Ноутбуки</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>

        <div className="category-section">
        <div className="left-title">
          <img src={images.cWifi} alt="" />
          <p>Сетевое оборудование</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>

        <div className="category-section">
        <div className="left-title">
          <img src={images.cMedia} alt="" />
          <p>Видеонаблюдение</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>


        <div className="category-section">
        <div className="left-title">
          <img src={images.cKomp} alt="" />
          <p>Компьютеры</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>


        <div className="category-section">
        <div className="left-title">
          <img src={images.cTexnika} alt="" />
          <p>Техника для офиса</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>


        <div className="category-section">
        <div className="left-title">
          <img src={images.cAcsessuar} alt="" />
          <p>Аксессуары</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>
        <div className="category-section">
        <div className="left-title">
          <img src={images.cTovarHome} alt="" />
          <p>Товары для дома</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>

        <div className="category-section">
        <div className="left-title">
          <img src={images.cTashqi} alt="" />
          <p>Периферийные устройства</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>

        <div className="category-section">
        <div className="left-title">
          <img src={images.cIP} alt="" />
          <p>IP Телефония</p>
        </div>
        <i className="fa-solid fa-chevron-right"></i>

        </div>

      </div>
      <div className="category-center">
        <h1>Сетевое <br /> оборудование</h1>
        <div className="list">
          <p>Коммутаторы</p>
          <p>Точки доступа Wi-Fi</p>
          <p>Медиаконверторы</p>
          <p>ADSL роутеры</p>
          <p>Сетевые адаптеры</p>
          <p>Wi-Fi роутеры и маршрутизаторы</p>
          <p>Инжекторы</p>
          <p>Повторители сигнала</p>
          <p>Прочее сетевое оборудование</p>
          <p>Сетевой кабель (Ethernet)</p>
        </div>
      </div>
      <div className="category-right">
        <img src={images.categoryImg} alt="" />
      </div>
    </div>
  )
}

export default Category