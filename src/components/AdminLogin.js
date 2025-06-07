import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
 console.log(credentials); // Add this before axios.post

  const login = async () => {
    try {
      const res = await axios.post('https://server-w8vq.onrender.com/api/admin/login', credentials);
      if (res.data.success) {
        onLogin(); // Show admin panel
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Invalid login");
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h3>Admin Login</h3>
      <input type="text" placeholder="Username" name="username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} /><br />
      <input type="password" placeholder="Password" name="password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default AdminLogin;
