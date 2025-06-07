import React, { useState } from 'react';
import axios from 'axios';

function MenuForm() {
  const [form, setForm] = useState({
    date: '',
    breakfast: '',
    lunch: '',
    dinner: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('https://server-w8vq.onrender.com/api/menu', form);
      alert("Menu updated!");
    } catch (error) {
      console.error(error);
      alert("Error updating menu");
    }
  };

  return (
    <div>
      <h3>Update Menu</h3>
      <input name="date" type="date" onChange={handleChange} /><br />
      <input name="breakfast" placeholder="Breakfast" onChange={handleChange} /><br />
      <input name="lunch" placeholder="Lunch" onChange={handleChange} /><br />
      <input name="dinner" placeholder="Dinner" onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Save Menu</button>
    </div>
  );
}

export default MenuForm;
