import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPost = ({ image, category, date, title, excerpt, link }) => {
  const navigation = useNavigate();
  return (
    <article className="blog-post" onClick={() => navigation(`../${link}`)}>
      <img loading="lazy" src={image} className="blog-post-image" alt={title} />
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <span className="blog-post-category">{category}</span>
          <span className="blog-post-date">{date}</span>
        </div>
        <h2 className="blog-post-title">{title}</h2>
        <p className="blog-post-excerpt">{excerpt}</p>
      </div>
    </article>
  );
};

export default BlogPost;