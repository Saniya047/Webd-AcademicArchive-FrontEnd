import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Admin from './Admin';
import Student from './Student';



function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <h1>Welcome to Hogwarts</h1>
          <p>One stop solution for your academics</p>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
