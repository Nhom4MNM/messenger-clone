import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import đúng trong React Router v6
import './App.css';
import Inbox from './Inbox'; // Import component Inbox
import Login from './Login'; // Import component Login

function App() {
  return (
    <div>
      {/* Menu */}
      <div className="menu">
        <div className="menu-item">
          <Link to="/inbox">Inbox</Link>
        </div>
        <div className="menu-item">
          <Link to="/">Login</Link>
        </div>
      </div>

      {/* Định tuyến các trang */}
      <Routes>
        <Route path="/inbox" element={<Inbox />} />  {/* Định tuyến tới Inbox */}
        <Route path="/" element={<Login />} />      {/* Định tuyến tới Login */}
      </Routes>
    </div>
  );
}

export default App;
