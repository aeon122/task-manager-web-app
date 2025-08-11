// src/components/Layout.js
// Common layout component with navbar, container, and footer
import React from 'react';
import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <div className="bg-light">
      <NavBar />
      {/* Bootstrap container with centered column */}
      <main className="container my-5 py-md-5">
        <div className="row justify-content-center pb-md-5 mb-md-4">
          <div className="col-12 col-md-10 col-lg-8">
            {/* Render whatever is passed inside <Layout> — e.g. <TasksPage /> or <Contact /> */}
            {children}
          </div>
        </div>
      </main>
      {/* Footer section */}
      <footer className="bg-dark text-center py-3 mt-5">
        <p className='mb-0 text-white'>&copy; {new Date().getFullYear()} Task Manager Web App by Bryan</p>
      </footer>
    </div>
  )
}

export default Layout;