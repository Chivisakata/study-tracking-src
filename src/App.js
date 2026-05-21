
import React, { useState } from "react";
import Login from "./components/Login/Login";

import Register from "./components/Register/Register";
function App() {
  // Trạng thái điều khiển: 'login' hoặc 'register'
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="app-container">
      {currentPage === 'login' ? (
        <Login onSwitchPage={() => setCurrentPage('register')} />
      ) : (
        <Register onSwitchPage={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default App;
