/**
 * This code was generated by Builder.io.
 */
import React from "react";

const BlogPost = ({ image, category, date, title, excerpt }) => {
  return (
    <article className="blog-post">
      <img loading="lazy" src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-category">{category}</span>
          <span className="blog-date">{date}</span>
        </div>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-excerpt">{excerpt}</p>
      </div>
    </article>
  );
};

export default BlogPost;
