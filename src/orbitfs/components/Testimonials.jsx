/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      content:
        "Orbit helped my business grow when no one else would. The loan I received from Orbit helped me when I was in a tight financial situation. Most importantly, the loans come in time. As soon as it is approved, you receive your money. Thank you Orbit, you are the best!",
      author: "Emmanuel Ehinomen",
    },
    {
      rating: 4,
      content:
        "Exceptional customer service and quick loan approval! The loan I received from Orbit helped me when I was in a tight financial situation. Most importantly, the loans come in time. As soon as it is approved, you receive your money. Thank you Orbit, you are the best!",
      author: "Tunde Badmus",
    },
    {
      rating: 4,
      content:
        "The team at Orbit Financial Services has been invaluable in managing my portfolio. Their expertise and proactive approach have consistently yielded impressive returns, even in volatile markets. I trust them completely with my financial well-being.",
      author: "Chinyere Akerele",
    },
    {
      rating: 3,
      content:
        "Orbit helped my business grow when no one else would. The loan I received from Orbit helped me when I was in a tight financial situation. Most importantly, the loans come in time. As soon as it is approved, you receive your money. Thank you Orbit, you are the best!",
      author: "Chisom Agun",
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
