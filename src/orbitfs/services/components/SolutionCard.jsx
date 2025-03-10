import React from 'react';

const SolutionCard = ({ imageSrc, title, description }) => {
  return (
    <article className="solution-card">
      <img src={imageSrc} alt={title} className="solution-image" />
      <div className="solution-content">
        <h3 className="solution-title">{title}</h3>
        <p className="solution-description">{description}</p>
      </div>
    </article>
  );
};

export default SolutionCard;