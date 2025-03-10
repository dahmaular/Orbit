import React from 'react'
import './footer.css'
import logo from '../../images/logo.png'
import Icon from '../../images/Icons.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigation = useNavigate()
  return (
    <div className='footer'>
        <div className='footer-card'>
            <img src={logo} alt="unsplashage" />
            <p>@ Copyright 2024 Orbit <br/>All right reservered</p>
            
        </div>
        <div className='footer-card1'>
            <h6>Quick Links</h6>
            <p onClick={() => navigation('/about')}>About Us</p>
            <p onClick={() => navigation('/faq')}>FAQs</p>
            <p onClick={() => navigation('/services')}>Services</p>
            <p onClick={() => navigation('/contact')}>Contact us</p>
        </div>
        <div className='footer-card2'>
            <h6>Contact Information</h6>
            <p onClick={() => navigation('/contact')}>Phone number</p>
            <p onClick={() => navigation('/contact')}>Email Address</p>
            <p onClick={() => navigation('/contact')}>Office Location</p>
        </div>
        <div className='footer-card3'>
            <p>Follow us</p>
            <img src={Icon} alt="unsplashage" />
        </div>
    </div>
  )
}

export default Footer