import React from 'react';

const Section = ({ title, subtitle, description, children }) => (
  <section className="section">
    <h2 className="section-title">{title}</h2>
    <h3 className="section-subtitle">{subtitle}</h3>
    <p className="section-description">{description}</p>
    {children}
  </section>
);

export default Section;