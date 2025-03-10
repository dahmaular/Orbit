import React from 'react';

const categories = ['All Posts', 'Loans', 'Investment', 'Loan Repayment'];

const BlogCategories = () => {
  return (
    <div className="blog-categories">
      {categories.map((category, index) => (
        <button 
          key={index} 
          className={`category-button ${index === 0 ? 'category-button-active' : 'category-button-inactive'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BlogCategories;