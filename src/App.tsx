import React from "react";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./pages/user";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userDetails" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
