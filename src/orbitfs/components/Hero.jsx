/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Button from "./Button";
import heroBg from '../../images/heroBg.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/453a60ef790317749eb6073739623b59090bc7d42af5ba0b8bad4d8b467f7432?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&"
          alt="Decorative element"
          className="hero-decoration"
        /> */}
        <div className="hero-text">
        <div>
          <h1 className="hero-title">
            Empowering Nigeria's Small{" "}
            <span className="highlight">Businesses</span>
          </h1>
          <p className="hero-subtitle">
            Driving Success for Nigeria's Entrepreneurs
          </p>
          <div className="hero-cta">
            <Button variant="primary" label="Learn More" />
            <Button variant="secondary" label="Apply for a loan" />
          </div>
          </div>
        </div>
        {/* */}
        <div className="hero-images">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20903d22c410337d50d7e70911c408306b92fa18b6d73ded39d0049d4c73325e?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&"
            alt="Decorative element"
            className="hero-image-1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dff63d5e46b154eeca0ea1a36f3dedd8faa3c7f3e798f439fcdd436551caeffd?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&"
            alt="Decorative element"
            className="hero-image-2"
          />
        </div> 
        <div className="hero-images">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e04c3748dc8472f9dad087b34063a845ea9482dde0fad24c3815947166d7251c?apiKey=0dc91187d1fc4cb3931d3d7b27a4a892&"
          alt="Hero background"
          className="hero-image2"
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
