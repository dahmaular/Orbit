import React from "react";

const ServiceCard = ({ image, title, description, color }) => {
  return (
    <div className="service-card" style={{ backgroundColor: color }}>
      <img loading="lazy" src={image} alt={title} className="service-icon" />
      <div className="service-content">
        <h3 className="service-title-new">{title}</h3>
        <p className="service-value-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
