import React from 'react';
import './App.css';
import './stylesheets/toastify.css';
import './stylesheets/style.css';
import logo from './images/logo.png'; // Đảm bảo bạn import đúng hình ảnh

function Login() {
  return (
    <div>
      {/* Menu */}
      <div className="menu">
        <div className="menu-item">
          <a href="/inbox">Inbox</a>
        </div>
        <div className="menu-item">
          <a href="/users">Users</a>
        </div>
        <div className="menu-item">
          <a href="/">Login</a>
        </div>
      </div>

      {/* Login Container */}
      <div id="login-container">
        <div id="left-column"></div>
        
        {/* Branding */}
        <div id="branding">
          <img src={logo} alt="Logo" />
          <h1></h1>
        </div>

        {/* Login Form */}
        <div id="login-form">
          <form method="post" action="/">
            <input
              type="text"
              name="username"
              placeholder="enter mobile or email"
              value=""
            />
            <p className="error show">Error message here</p>
            <input
              type="password"
              name="password"
              placeholder="enter password"
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
