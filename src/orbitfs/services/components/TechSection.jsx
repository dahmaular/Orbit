import * as React from "react";

function Section({ imageSrc, imageAlt, title, description }) {
  return (
    <section className="tech-section-card">
      <img loading="lazy" src={imageSrc} alt={imageAlt} className="tech-section-image" />
      <div className="section-content">
        <h2 className="tech-section-title">{title}</h2>
        <p className="tech-section-description">{description}</p>
      </div>
    </section>
  );
}

export default Section;