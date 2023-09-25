import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="body">

      <ul className="navbar">
        <li>
          <Link to="/">Biryani</Link>
        </li>
        <li>
          <Link to="/dome">VegThali</Link>
        </li>
        <li>
          <Link to="/about">PanjabiThali</Link>
        </li>
        <li>
          <Link to="/contact">Chinesfood</Link>
        </li>
        <li>
          <Link to="/login">Mithai</Link>
        </li>
        <li>
          <Link to="/gallary">Pizza</Link>
        </li>
      </ul>
      <div className="u1"> Our services </div>
      <br></br>
      <br></br>
<br></br>
      
       </div>
      
  );
}

export default Navbar;
