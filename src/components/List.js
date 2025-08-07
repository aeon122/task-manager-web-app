// src/components/List.js
// Renders a list of todos based on the filter
import React from 'react';
import Items from './Items';

function List({ todos, setTodos, filter }) {
  // Filter todos based on selected filter option
  const filtered = todos.filter(todo =>
    filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed
  );

  return (
    <ul className="list-group">
      {filtered.map(todo => (
        <Items key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default List;