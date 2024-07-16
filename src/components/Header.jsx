// src/components/Header.js
import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>AGCV</h1>
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-items">
            <a href="/" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li className="menu-items">
            <a href="/about" rel="noopener noreferrer">
              About
            </a>
          </li>
          <li className="menu-items">
            <a href="/contact" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
