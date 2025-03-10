import React from "react";
import BlogContent from "./BlogContent";
import "./styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import arrow from "../../images/Arrowleft.png";
import img from "../../images/image 41.png";
import BlogPost from "./BlogPost";
import { blogPostsData } from "./BlogPosts";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigation = useNavigate();
  return (
    <div className="blogPost">
      <Header />
      <div className="post-subNav">
        <img className="arrow-image" src={arrow} onClick={() => navigation('../blog')} />
        <p onClick={() => navigation('../blog')}>Back</p>
      </div>
      <div className="blogBody">
        <img src={img} className="headerImage" />
        <h3>How Green Financing is Changing the Nigerian Market</h3>
        <p className="blogText">
          Green financing is transforming the Nigerian market by providing
          critical support for sustainable projects and fostering an
          eco-friendly economy. As a financial approach that focuses on funding
          initiatives with positive environmental impacts, green financing is
          becoming increasingly significant in Nigeria. This trend is driven by
          the need to address environmental challenges such as climate change,
          deforestation, and pollution while promoting economic growth and
          development. By channeling funds into renewable energy projects, waste
          management systems, sustainable agriculture, and other green
          initiatives, green financing is helping to reduce Nigeria's carbon
          footprint and promote a more resilient and sustainable economy. One of
          the key areas where green financing is making a notable impact in
          Nigeria is in the energy sector. With the country's heavy reliance on
          fossil fuels, there is a growing need to diversify energy sources and
          reduce greenhouse gas emissions. Green financing is enabling the
          development of renewable energy projects, such as solar and wind
          power, which are essential for providing clean and reliable energy to
          underserved communities. These projects not only help reduce the
          environmental impact but also create jobs and stimulate economic
          growth. Additionally, green bonds and other financial instruments are
          being utilized to attract investment in sustainable energy
          infrastructure, further accelerating the transition to a low-carbon
          economy. The rise of green financing in Nigeria is also influencing
          the financial sector by encouraging banks and financial institutions
          to adopt more sustainable practices. Many institutions are now
          incorporating environmental, social, and governance (ESG) criteria
          into their lending and investment decisions, recognizing the long-term
          benefits of supporting sustainable projects. This shift is helping to
          mitigate risks associated with climate change and environmental
          degradation while also opening up new opportunities for financial
          growth. As a result, the Nigerian market is witnessing a growing
          interest in green finance products, with more investors seeking to
          align their portfolios with sustainable development goals. In
          conclusion, green financing is playing a pivotal role in reshaping the
          Nigerian market by promoting sustainable development and addressing
          environmental challenges. Through the support of renewable energy
          projects, sustainable agriculture, and other green initiatives, green
          financing is helping to build a more resilient and eco-friendly
          economy. The increasing adoption of ESG criteria by financial
          institutions further underscores the importance of green financing in
          driving positive change and creating a sustainable future for Nigeria.
        </p>

        <div className="bodyFooter">
          <h3>Read more Articles</h3>
          <div className="blog-posts">
            {blogPostsData.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
