// src/components/NavBar.js
// Navigation bar with links to pages
import React from 'react';
import { Link, useLocation } from 'react-router-dom'

function NavBar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Brand logo/title */}
        <Link className="navbar-brand" to="/">TaskManager</Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Link to /tasks */}
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/tasks' ? 'active fw-bold' : ''}`} to="/tasks">
                Tasks
              </Link>
            </li>
            {/* Link to /contact */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;