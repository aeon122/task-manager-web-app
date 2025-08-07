// src/components/Items.js
// Displays a single todo item with toggle and delete functionality
import React from 'react';

function Items({ todo, setTodos }) {
  // Toggle completion status
  const toggleComplete = () => {
    setTodos(prev => prev.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
  };

  // Remove todo from list
  const remove = () => {
    setTodos(prev => prev.filter(t => t.id !== todo.id));
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'bg-light' : ''}`}>
      <div className="d-flex align-items-center gap-2">
        <input type="checkbox" checked={todo.completed} onChange={toggleComplete} />
        <span className={todo.completed ? 'text-decoration-line-through text-muted' : ''}>
          {todo.text}
        </span>
        {todo.completed && <span className="badge bg-success">Done</span>}
      </div>
      <button className="btn btn-sm btn-outline-danger" onClick={remove}>❌</button>
    </li>

  );
}

export default Items;