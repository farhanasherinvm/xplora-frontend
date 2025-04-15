import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back to xplora 🌍</h1>
        <p>Sign in to continue your adventure!</p>

        <form>
          {/* Email Input */}
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="forgot-password">
           <a href="#"> <p>forgot password?</p></a>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn-login">Log In</button>

          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
