import React from 'react';
import './ServiceItem.css';

const ServiceItem = ({ service, price }) => (
    <div className="service-item">
        <div className="service-description">
            <h2>{service}</h2>
            <p>Цена: {price} рублей</p>
        </div>
    </div>
);

export default ServiceItem;