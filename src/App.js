import React from "react";
import Navbar from "./Navbar";
import Dome from "./Dome";
import Login from "./Login";
import Contact from "./Contact";
import Gallary from "./Gallary";
import About from "./About";
import Home from "./Home";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dome" element={<Dome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallary" element={<Gallary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
