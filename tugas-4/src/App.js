import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
        <nav
          style={{
            display: "flex",
            gap: "20px",
            padding: "10px 20px",
            background: "#007bff",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        </nav>

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
