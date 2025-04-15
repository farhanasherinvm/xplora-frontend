// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/" className="logo">
//           🌍 xplora
//         </Link>
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <Link to="#">Destinations</Link>
//         </li>
        
//         <li>
//           <Link to="/about">About Us</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">🌍 Xplora</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/tours">Trips</a></li>
        <li><a href="/leaders">Leaders</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
