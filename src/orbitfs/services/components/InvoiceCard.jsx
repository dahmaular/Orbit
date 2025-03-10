import React from 'react'
import pg3 from '../../../images/pg3.png'

const InvoiceCard = () => {
  return (
    <div className='service-section'>
        <div>
        <button className='service-btn'>Invoicing</button>
          <h2 className='service-title'>Invoice Discounting</h2>
          <h3>Description</h3>
          <p>Advancing cash against outstanding invoices to improve cash flow.</p>
          <h3>Benefits</h3>
          <ul>
            <li>Improve cash flow and manage working capital.</li>
          </ul>
          <h3>Application Process</h3>
          <ul>
            <li>Step 1: Submit your invoices online</li>
            <li>Step 2: Get up to 80% of the invoice value advanced within 24 hours</li>
            <li>Step 3:  Repay the advance once the invoice is paid by your customer</li>
          </ul>
          <a href="">Submit an Invoice</a>
        </div>
        <div>
            <img src={pg3} width={550} alt="unsplash" />
        </div>
    </div>
  )
}

export default InvoiceCard