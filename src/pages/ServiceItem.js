import React from 'react';

const ServiceItem = ({ icon, title, description, color }) => {
    return (
        <div className="service-item">
            <div className={`icon-circle ${color}`}>
                {icon}
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceItem;