import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };
 const handleAdminLogin=()=>{
  localStorage.setItem("adminLoggedIn", "true");
  navigate("/")
  window.location.reload();

 }
 const handleUserLogin=()=>{
  localStorage.setItem("userLoggedIn", "true");
  navigate("/")
  window.location.reload();

 }
  return (
    <login className="login">

    <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`} id="container-login">
      
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Request Demo</h1>
            <input type="text" placeholder="Full Name" id="email" />
            <input type="tel" placeholder="Number" id="password" />
            <button id="register" onClick={handleUserLogin}>Request Demo</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign In</h1>
            <input type="email" placeholder="Email" id="login-email" />
            <input type="password" placeholder="Password" id="login-password" />
            <button id="sign-in" onClick={handleAdminLogin}>Sign in</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello!</h1>
              <p>Start your journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>Request Demo</button>
            </div>
          </div>
        </div>
     
    </div>
    </login>
  );
};

export default Login;