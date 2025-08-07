// src/components/FilterButtons.js
// Buttons to switch between todo filters
import React from 'react';

function FilterButtons({ filter, setFilter }) {
  return (
    <div className="mb-3 d-flex gap-2">
      <button className="btn btn-outline-secondary" onClick={() => setFilter('all')} disabled={filter === 'all'}>All</button>
      <button className="btn btn-outline-secondary" onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Completed</button>
      <button className="btn btn-outline-secondary" onClick={() => setFilter('incomplete')} disabled={filter === 'incomplete'}>Incomplete</button>
    </div>
  );
}

export default FilterButtons;