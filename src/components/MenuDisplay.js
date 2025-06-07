import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MenuDisplay() {
  const [menu, setMenu] = useState(null);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    axios.get(`https://server-w8vq.onrender.com/api/menu/${today}`)
      .then(res => setMenu(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!menu) return <p>No menu available for today.</p>;

  return (
    <div>
      <h3>Today's Menu</h3>
      <p><strong>Breakfast:</strong> {menu.breakfast}</p>
      <p><strong>Lunch:</strong> {menu.lunch}</p>
      <p><strong>Dinner:</strong> {menu.dinner}</p>
    </div>
  );
}

export default MenuDisplay;
