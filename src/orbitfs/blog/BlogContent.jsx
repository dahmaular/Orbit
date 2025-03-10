import React from 'react';
import BlogCategories from './BlogCategories';
import BlogPosts from './BlogPosts';

const BlogContent = () => {
  return (
    <main className="blog-content">
      <div className="blog-container">
        <BlogCategories />
        <BlogPosts />
      </div>
    </main>
  );
};

export default BlogContent;