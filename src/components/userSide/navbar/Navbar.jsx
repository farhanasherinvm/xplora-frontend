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
// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const logout = async () => {
//     try {
//       const refresh = localStorage.getItem("refresh");
//       await axios.post("/logout/", { refresh });
//       localStorage.removeItem("access");
//       localStorage.removeItem("refresh");
//       alert("Logged out!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout error:", err.response?.data);
//     }
//   };
  
  
//   return (
//     <nav className="nav">
//       <div className="logo">🌍 Xplora</div>
//       <ul className="nav-links">
//         <li><a href="/">Home</a></li>
//         <li><a href="/tours">Trips</a></li>
//         <li><a href="/leaders">Leaders</a></li>
//         <li><a href="/contact">Contact</a></li>
//         <li><a href="/login">Logout</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axiosInstance";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const refresh = localStorage.getItem("refresh");
      console.log("Logging out with refresh:", refresh);
      const response = await axios.post("logout/", { refresh });

      console.log("Logout response:", response.data);
  
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      alert("Logged out!");
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err.response?.data || err.message);
    }
  };
  

  return (
    <nav className="nav">
      <div className="logo">🌍 Xplora</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/tours">Trips</a></li>
        <li><a href="/leaders">Leaders</a></li>
        <li><a href="/contact">Contact</a></li>
        <li>
          {/* Logout as a button or clickable link */}
          <button onClick={logout} className="logout-btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
