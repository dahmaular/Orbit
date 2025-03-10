import React from 'react';
import pg4 from '../../../images/pg4.png'

const SustainabilityCard = () => {
  return (
    <div className='service-section'>
        <div>
            <img src={pg4} width={550} alt="unsplash" />
        </div>

        <div>
        <button className='service-btn'>Sustainability</button>
          <h2 className='service-title'>Green Financing</h2>
          <h3>Description</h3>
          <p>Financing environmentally sustainable projects.</p>
          <h3>Eligibility Criteria</h3>
          <ul>
            <li>Projects focused on renewable energy, energy efficiency, waste management, etc.</li>
            <li>Clear environmental and sustainability goals</li>
          </ul>
          <h3>Application Process</h3>
          <ul>
            <li>Step 1: Submit a project proposal</li>
            <li>Step 2:  Provide necessary documentation (business plan, environmental impact assessment)</li>
            <li>Step 3:   Receive approval decision within 48 hours</li>
          </ul>
          <a href="">Submit a Project Proposal</a>
        </div>
    </div>
  )
}

export default SustainabilityCard