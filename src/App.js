// src/App.js
// Main entry point for the app. Sets up routing and layout.
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TasksPage from './pages/TasksPage';
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      {/* Layout wrap all view and includes NavBar and footer */}
      <Layout>
        <Routes>
          <Route path="/" element={<TasksPage />} />   
          {/* Route for the /todos view */}
          <Route path="/tasks" element={<TasksPage />} />
          {/* Route for the /contact view */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;