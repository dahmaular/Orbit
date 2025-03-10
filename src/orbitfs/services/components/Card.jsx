import React from 'react';

const Card = ({ title, amount, percentage, trend, icon }) => (
  <div className="card">
    <div className="card-content">
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-amount">{amount}</p>
        <div className="card-trend">
          <div className="badge">
            <div className="badge-content">
              <img src={icon} alt="" className="trend-icon" />
              <span className="trend-label">{percentage}</span>
            </div>
          </div>
          <span className="trend-period">this month</span>
        </div>
      </div>
      <img src={icon} alt="" className="card-icon" />
    </div>
  </div>
);

export default Card;