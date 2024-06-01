import React from 'react';
import ServiceItem from './ServiceItem';
import './Services.css';

const servicesData = [
  { service: 'Установка камеры', price: 1000 },
  { service: 'Настройка системы безопасности', price: 2000 },
  // Добавьте другие услуги здесь
];

const Services = () => (
  <div className="services">
    <h1>Наши услуги</h1>
    <div className="services-container">
      {servicesData.map((item, index) => (
        <ServiceItem key={index} service={item.service} price={item.price} />
      ))}
    </div>
  </div>
);

export default Services;