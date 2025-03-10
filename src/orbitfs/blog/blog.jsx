import React from "react";
import BlogContent from "./BlogContent";
import "./styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div className="blog">
      <Header />
      {/*<HeroSection />*/}
      <section className="blog-hero-section">
        <div className="blog-hero-content">
          <div className="blog-hero-text">
            <h1 className="blog-hero-title">OFSL Blog</h1>
            <p className="blog-hero-subtitle">
              Unlocking Financial Success with Expert Guidance and Knowledge
            </p>
          </div>
        </div>
      </section>
      <BlogContent />
      <Footer />
    </div>
  );
};

export default Blog;
