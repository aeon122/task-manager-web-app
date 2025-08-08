// src/components/NavBar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
        <div className="container">
          
          {/* Brand */}
          <Link className="navbar-brand" to="/">TaskManager</Link>

          {/* Hamburger toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <hr className="nav-mobile d-md-none text-white" />
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/tasks' ? 'active fw-bold text-white' : 'text-white'}`}
                  to="/tasks"
                >
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === '/contact' ? 'active fw-bold text-white' : 'text-white'}`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  );
}

export default NavBar;