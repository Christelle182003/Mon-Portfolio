// src/components/Header.js
import React, { useEffect } from "react";
import "../styles/Header.css";

function Header() {
  useEffect(() => {
    const hamburger = document.querySelector('#hbg');
    const menu = document.querySelector('.menu');

    const toggleMenu = () => {
      if (menu.style.display === 'block') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'block';
      }
    };

    hamburger.addEventListener('click', toggleMenu);

    // Cleanup function to remove event listener
    return () => {
      hamburger.removeEventListener('click', toggleMenu);
    };
  }, []);
  return (
    <header className="header">
      <div className="logo">
        <h1>AGCV</h1>
      </div>
      <div id="hbg"><i class="fas fa-bars hamburger-icôn"></i></div>
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
