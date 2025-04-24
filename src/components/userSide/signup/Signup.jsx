import React, { useState } from "react";
import "./Signup.css";
import axios from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

  
    try {
      const res = await axios.post("register/", formData);
      alert("Registration successful!");
      console.log("User registered:", res.data);
      navigate("/login")
    } catch (err) {
      console.error("Registration failed:", err.response?.data || err.message);
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Welcome to xplora 🌍</h1>
        <p>Create an account to start your adventure!</p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your Username" onChange={e=>setFormData({...formData,username:e.target.value})} required />
          </div>
          {/* Email Field */}
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" onChange={e=>setFormData({...formData,email:e.target.value})}required />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={e=>setFormData({...formData,password:e.target.value})} required />
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" onChange={e=>setFormData({...formData,password2:e.target.value})} required />
          </div>
         
          {/* Signup Button */}
          <button type="submit" className="btn-signup">Sign Up</button>
          
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
