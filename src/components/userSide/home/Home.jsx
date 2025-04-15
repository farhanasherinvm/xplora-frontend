// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";
// import Navbar from "../navbar/Navbar";
// const destinations = [
//   { id: 1, name: "Bali, Indonesia", image: "/src/assets/destinations/b.jpg" },
//   { id: 2, name: "Paris, France", image: "/src/assets/destinations/a.jpg" },
//   { id: 3, name: "Santorini, Greece", image: "/src/assets/destinations/c.jpg" },
//   { id: 4, name: "Kyoto, Japan", image: "/src/assets/destinations/d.jpg" },
//   { id: 5, name: "Machu Picchu, Peru", image: "/src/assets/destinations/e.jpg" },
// ];

// function Home() {
//   return (
    
// <>
// <Navbar/>
// <div className="home-content">
// <div>
//     <h1>Welcome to Xplora 🌍</h1>
//     <p>Discover new places, meet travel leaders, and explore the world with ease!</p>
//     <div className="home-buttons">
//       <Link to="/signup" className="btn-primary">Get Started</Link>
//       <Link to="/login" className="btn-secondary">Log In</Link>
//     </div>
//   </div>
// </div>
//     <div className="home-container">
      
//       {/* Hero Section */}
//       {/* <div className="home-content">
//         <h1>Welcome to Xplora 🌍</h1>
//         <p>Discover new places, meet travel leaders, and explore the world with ease!</p>
//         <div className="home-buttons">
//           <Link to="/signup" className="btn-primary">Get Started</Link>
//           <Link to="/login" className="btn-secondary">Log In</Link>
//         </div>
//       </div> */}

//       {/* Top Destinations Section */}
//       <div className="destinations-container">
//         <h2>Top Destinations</h2>
//         <div className="destinations-grid">
//           {destinations.map((destination) => (
//             <div key={destination.id} className="destination-card">
//               <img src={destination.image} alt={destination.name} />
//               <h3>{destination.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Home;
import React from "react";
import "./Home.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const destinations = [
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1559589689-577aabd1b82e"
  },
  {
    name: "New York",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442"
  },
  {
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1533055640609-24b498cdf3c1"
  }
];

const Home = () => {

  return (
    <div className="homepage">
      <Navbar/>
      {/* Header Section */}
      <header className="header">
        <div className="overlay">
          <h1>Explore the World with Friends</h1>
          <p>Join group adventures to top destinations!</p>
          <button className="explore-btn">Start Your Journey</button>
        </div>
      </header>

      {/* Top Destinations */}
      <section className="section top-destinations">
      <button className="destination-btn">Top Destinations</button>
        <h2>Visit & Enjoy Adventure Life With <br></br>Full Of Dreams</h2>
        <div className="destinations-grid">
  {destinations.map((place, i) => (
    <div key={i} className="destination-card">
      <img src={place.image} alt={place.name} />
      <h3>{place.name}</h3>
    </div>
  ))}
</div>
      </section>

      {/* Reviews */}
      <section className="section reviews">
        <h2>What Our Travelers Say</h2>
        <div className="reviews-grid">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="review-card">
              <p>
                "Amazing experience! Met new people and saw breathtaking places."
              </p>
              <h4>- Traveler {i + 1}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Chat Section */}
      <section className="section chat">
        <h2>Group Chat</h2>
        <div className="chat-box">
          <div className="messages">
            <p><strong>Alice:</strong> When is the next trip?</p>
            <p><strong>John:</strong> Can't wait to visit Bali!</p>
          </div>
          <input type="text" placeholder="Type a message..." />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-us">
        <h2>Why Choose Us</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <h3>Expert Leaders</h3>
            <p>Our experienced travel leaders ensure a smooth and fun journey.</p>
          </div>
          <div className="reason-card">
            <h3>Verified Destinations</h3>
            <p>Only the best and safest group travel experiences are listed.</p>
          </div>
          <div className="reason-card">
            <h3>Easy Planning</h3>
            <p>Book, chat, and plan—all in one place.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
