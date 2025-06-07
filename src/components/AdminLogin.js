import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css'; // Make sure to import the CSS


function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const login = async () => {
    try {
      const res = await axios.post('https://server-w8vq.onrender.com/api/admin/login', credentials);
      if (res.data.success) {
        onLogin();
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Invalid login");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        {/* <h1 className="title">HOSTEL MESS</h1> */}
        <img src="./login.png" alt="Mess Illustration" className="illustration" />
      </div>

      <div className="right-panel">
        <h2 className="login-title">Login</h2>
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <a href="#" className="forgot">Forgot password?</a>
        <button onClick={login}>LOG IN</button>
      </div>
    </div>
  );
}

export default AdminLogin;
