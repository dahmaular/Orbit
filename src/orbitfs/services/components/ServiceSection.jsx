import React from 'react';

const ServiceSection = ({ title, subtitle, description, benefits, process, ctaText }) => (
  <section className="service-section">
    <h2 className="service-title">{title}</h2>
    <h3 className="service-subtitle">{subtitle}</h3>
    <h4 className="section-heading">Description</h4>
    <p className="service-description">{description}</p>
    {benefits && (
      <>
        <h4 className="section-heading">Benefits</h4>
        <p className="service-benefits">{benefits}</p>
      </>
    )}
    <h4 className="section-heading">Application Process</h4>
    <ol className="process-list">
      {process.map((step, index) => (
        <li key={index} className="process-step">{step}</li>
      ))}
    </ol>
    <a href="#" className="cta-link">{ctaText}</a>
  </section>
);

export default ServiceSection;