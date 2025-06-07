import React from 'react';
import MenuForm from './components/MenuForm';
import MenuDisplay from './components/MenuDisplay';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Hostel Mess Menu</h2>
      <MenuForm />
      <hr />
      <MenuDisplay />
    </div>
  );
}

export default App;
