// src/pages/TasksPage.js
// Page for managing the todo list
import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import FilterButtons from '../components/FiltherButtons';

function TasksPage() {
  // State for list of todos and the current filter
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  return (
    <div className="card shadow-sm p-4">
      <h1 className="mb-4 text-primary">Task Manager</h1>
      <Form setTodos={setTodos} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <List todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
}

export default TasksPage;