import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import the Autoplay module
import "swiper/css";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./DestinationDetail.css";

const images = [
  "/src/assets/destinations/a.jpg",
  "/src/assets/destinations/b.jpg",
  "/src/assets/destinations/c.jpg",
];

const DestinationDetail = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="title">Explore the Evergreen Forest</h1>
      <p className="subtitle">Amazon evergreen forest, Amazon.</p>
      <div className="rating">Excellent 4.8/5 (1214 reviews)</div>

      <Swiper
  modules={[Autoplay]}
  spaceBetween={10}
  slidesPerView={1}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  loop={true}
  className="carousel"
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
      <img src={img} alt={`Amazon ${index}`} />
    </SwiperSlide>
  ))}
</Swiper>

      <div className="info-grid">
        <div>
          <h4 className="section-title">Duration</h4>
          <p>10 days</p>
        </div>
        <div>
          <h4 className="section-title">Tour Type</h4>
          <p>Group Tour</p>
        </div>
        <div>
          <h4 className="section-title">Group Size</h4>
          <p>50 people</p>
        </div>
      </div>


      <div className="map-location">
  <iframe
    title="Amazon Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7967633.553499435!2d-75.41178583037447!3d-3.4653059502109895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91aa358a2a3f67e3%3A0x2ad607fb0de51f45!2sAmazon%20Rainforest!5e0!3m2!1sen!2sus!4v1615991687489!5m2!1sen!2sus"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

      

<div className="overview-packages-container">
  <div className="overview-section">
    <h2 className="section-title">Overview</h2>
    <p className="section-text">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor...
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.

Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.

Buffet breakfast as per the Itinerary
Visit eight villages showcasing Polynesian culture
Complimentary Camel safari, Bonfire, and Cultural Dance at Camp
All toll tax, parking, fuel, and driver allowances
Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.
    </p>
    <div className="section">
        <h2 className="section-title">Itinerary</h2>
        <ul className="text-gray">
          <li>Day 1: Stet clita kasd gubergren...</li>
          <li>Day 2: Stet clita kasd gubergren...</li>
          <li>Day 3: Stet clita kasd gubergren...</li>
          <li>Day 4: Stet clita kasd gubergren...</li>
        </ul>
      </div>

      

     

      <div className="section">
        <h2 className="section-title">Write Your Review</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Your comments" />
        <button className="book-btn">Submit</button>
      </div>
  </div>

  <div className="packages-section">
    <h2 className="section-title">Packages</h2>
    <div className="package-grid">
      {["Standard", "Deluxe", "Super Deluxe"].map((type, index) => (
        <div key={index} className="package-card">
          <h3>{type} Package</h3>
          <p>Valid from 01 Feb 2022 - 15 Feb 2022</p>
          <ul>
            <li>Buffet breakfast</li>
            <li>Polynesian cultural villages</li>
            <li>Camel safari & Bonfire</li>
            <li>All taxes and driver allowances</li>
            <li>Hygienic vehicle (SUV/Sedan)</li>
          </ul>
          <div className="price">$30,500 / Person</div>
          <div className="old-price">$35,500</div>
          <button className="book-btn">Book Now</button>
        </div>
      ))}
    </div>
    <div className="section">
        <h2 className="section-title">Why Choose Us</h2>
        <ul className="text-gray">
          <li>Buffet breakfast</li>
          <li>Polynesian cultural villages</li>
          <li>Camel safari & Bonfire</li>
          <li>All taxes and driver allowances</li>
          <li>Hygienic vehicle for sightseeing</li>
        </ul>
      </div>
  </div>
  
  
</div>


      

      <div className="section">
        <h2 className="section-title">All Reviews</h2>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="review">
            <p>
              " Loved the overall tour for all 6 days covering Jaipur, Jodhpur, and Jaisalmer. Worth your money for sure..."
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DestinationDetail;
