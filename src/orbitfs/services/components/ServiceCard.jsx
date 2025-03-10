import React from 'react'
import pg1 from '../../../images/pg1.png';

const ServiceCard = () => {
  return (
      <div className='service-section'>
        <div>
          <button className='service-btn'>Loans</button>
          <h2 className='service-title'>Microloans for Small Businesses</h2>
          <h3>Description</h3>
          <p>Tailored microloans to help small businesses grow without needing collateral</p>
          <h3>Eligibility Crieria</h3>
          <ul>
            <li>Business Age: Minimum 1 year</li>
            <li>Revenue: Minimum annual revenue of N1,000,000</li>
            <li>Repayment capacity: Demonstrated ability to repay the loan</li>
          </ul>
          <h3>Application Process</h3>
          <ul>
            <li>Step 1: Fill out the online application form</li>
            <li>Step 2: Submit required documents (business registration, financial <br/>statements)</li>
            <li>Step 3: Receive approval decision within 48 hours</li>
          </ul>
          <a href="">Fill the Online Application form</a>
        </div>
        <div>
          <img src={pg1} width={550} alt="unsplash" />
        </div>
      </div>
  )
}

export default ServiceCard