import React from 'react';
import './Header.css'; // Подключение стилей для заголовка
import logo from '../assets/images/background-image.jpg'; // Обновите путь к изображению логотипа

const Header = () => (
    <header className="header">
        <div className="logo">
            <img src={logo} alt="Company Logo" />
        </div>
        <div className="header-text">
            <h1>Добро пожаловать в нашу компанию</h1>
            <p>Мы предлагаем лучшие решения для видеонаблюдения и интеграции 1С.</p>
        </div>
        <nav className="menu">
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О компании</a></li>
                <li><a href="/projects">Проекты</a></li>
                <li><a href="/services">Услуги</a></li>
                <li><a href="/contact">Контакты</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
