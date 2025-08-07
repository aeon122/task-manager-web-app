// src/components/Form.js
// Form to add new todo items
import React, { useState } from 'react';

function Form({ setTodos }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new todo to the list
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input className="form-control" value={text} onChange={(e) => setText(e.target.value)} required />
      <button className="btn btn-primary shadow-sm">Add</button>
    </form>
  );
}

export default Form;