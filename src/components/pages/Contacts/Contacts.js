import React from 'react';
import './Contacts.css';

const Contacts = () => (
  <div className="contacts">
    <h2>Контакты</h2>
    <div className="contact-info">
      <p>Адрес: Россия, г. Абакан, ул. Фабричная, 21</p>
      <p>Телефон: +7 (123) 456-78-90</p>
      <p>Email: info@company.com</p>
      <p>Рабочие часы: Пн-Пт 9:00 - 18:00</p>
    </div>
    <div className="map-container">
      {/* Ваша карта или другой контент */}
    </div>
  </div>
);

export default Contacts;