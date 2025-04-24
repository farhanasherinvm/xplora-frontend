import React, { useState } from "react";
import "./Login.css";
import axios from "../../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate=useNavigate()
  const [data,setData]=useState({
    username:"",
    password:""
  })
  const handleSubmit=async(e)=>{
    e.preventDefault();

    try {
    const res=await axios.post("login/",data)
    localStorage.setItem("access", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.access}`;
    alert("doneeee")
    navigate("/home")
    }
   catch (err) {
    alert("noooo")
    console.error("login failed:", err.response?.data || err.message);
  }
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back to xplora 🌍</h1>
        <p>Sign in to continue your adventure!</p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-group">
            <label>username</label>
            <input type="text" placeholder="Enter your username" onChange={e=>setData({...data,username:e.target.value})}required />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" onChange={e=>setData({...data,password:e.target.value})}required />
          </div>
          <div className="forgot-password">
           <a href="#"> <p>forgot password?</p></a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn-login">Log In</button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
       
      </div>
    </div>
  );
}

export default Login;
