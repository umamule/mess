// import React from 'react';
// import MenuForm from './components/MenuForm';
// import MenuDisplay from './components/MenuDisplay';

// function App() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Hostel Mess Menu</h2>
//       <MenuForm />
//       <hr />
//       <MenuDisplay />
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import AdminLogin from './components/AdminLogin';
import MenuForm from './components/MenuForm';
import MenuDisplay from './components/MenuDisplay';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Hostel Mess Menu</h2>
      {isAdmin ? <MenuForm /> : <AdminLogin onLogin={() => setIsAdmin(true)} />}
      <hr />
      <MenuDisplay />
    </div>
  );
}

export default App;
