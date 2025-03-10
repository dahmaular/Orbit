import React from "react";
import BlogPost from "./BlogPost";

export const blogPostsData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a86226b6102184efaaa2f0b36be5a042e62f4eab98bd621dd0afdf0495b7db52?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
    category: "EDUCATION",
    date: "February 26th, 2024",
    title: "New AI Tools Revolutionize Micro-lending",
    excerpt:
      "AI-powered algorithms analyze vast datasets to assess borrower creditworthiness swiftly and accurately, expanding access to micro-loans",
    link: "post",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bbcf752bf870612652e8c8adec926d6f5685300158621962333e40e1959dc8bd?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
    category: "EDUCATION",
    date: "March 12th, 2024",
    title: "How Green Financing is Changing the Nigerian Market",
    excerpt:
      "Green financing initiatives in Nigeria aim to boost investments in renewable energy sources like solar and wind power.",
    link: "post",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bbcf752bf870612652e8c8adec926d6f5685300158621962333e40e1959dc8bd?placeholderIfAbsent=true&apiKey=0dc91187d1fc4cb3931d3d7b27a4a892",
    category: "EDUCATION",
    date: "April 10th, 2024",
    title: "How Green Financing is Changing the Nigerian Market",
    excerpt:
      "Green financing initiatives in Nigeria aim to boost investments in renewable energy sources like solar and wind power.",
    link: "post",
  },
  // Add more blog post data as needed
];

const BlogPosts = () => {
  return (
    <div className="blog-posts">
      {blogPostsData.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogPosts;
