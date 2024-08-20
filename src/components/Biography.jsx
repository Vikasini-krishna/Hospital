import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          
          <h3>Who We Are</h3>
          <p>
          Vikas Medical Hospital, established in 1998, has been a cornerstone of healthcare in the region, offering exceptional medical services with a commitment to patient care and community well-being. Over the past two decades, the hospital has grown from a modest healthcare facility into a state-of-the-art institution known for its comprehensive medical services and advanced technology
          </p>
          <h3>Mission:</h3>
          <p>The mission of Vikas Medical Hospital is to provide accessible, high-quality healthcare that meets the needs of the community. The hospital is dedicated to fostering a culture of compassion, respect, and excellence, ensuring that every patient receives personalized care.</p>
          <p>
          With over two decades of dedicated service, Vikas Medical Hospital has become a trusted name in healthcare. Its unwavering commitment to patient care, combined with its continuous pursuit of medical excellence, ensures that it will continue to serve the community with distinction for many more years.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
