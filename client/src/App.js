import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home'; 
import Payment from './pages/payment';
import Login from "./pages/login";
import Register from "./pages/register";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/p_settings" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
