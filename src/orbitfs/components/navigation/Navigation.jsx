import React, { useState } from "react";
import "./navigation.css";
import Button from "../Button";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About Us", link: "about" },
    { label: "Services", link: "services" },
    { label: "FAQs", link: "faq" },
    { label: "Contact Us", link: "contact" },
    { label: "Resources", link: "blog", hasDropdown: true },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="nav-header">
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
      <div className={`nav-items ${isMobileMenuOpen ? "open" : ""}`}>
        {navItems.map((item, index) => (
          <div key={index} className="nav-item">
            <a href={item.link} className="nav-link">
              {item.label}
            </a>
            {/*{item.hasDropdown && (
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/745f4a325798408d80543bbacf1852135593f5c0514bd614a697a7386fbb93c1?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&"
                alt="Dropdown indicator"
                className="dropdown-icon"
              />
            )}*/}
          </div>
        ))}
        {/*<Button label={"Sign up"} variant={"primary"} />*/}
      </div>
    </nav>
  );
};

export default Navigation;
