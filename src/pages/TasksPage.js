// src/pages/TasksPage.js
// Page for managing the todo list
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import FilterButtons from '../components/FiltherButtons';

function TasksPage() {
   // Load tasks from localStorage on first render
  const [todos, setTodos] = useState(() => {
    const savetodos = localStorage.getItem('todos');
    return savetodos ? JSON.parse(savetodos) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1 className="text-primary text-center mb-4 fade-in-top">Welcome to the Task Manager</h1>

      <div className="card shadow-sm p-4 py-5">
        <Form setTodos={setTodos} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <List todos={todos} setTodos={setTodos} filter={filter} />
      </div>

      <p className="lead fade-in-bottom mt-4">
        Use this app to create, manage, and track your daily tasks. Add new todos,
        mark them as complete, filter by status, and keep your productivity on point.
        You can also reach out via the Contact page if you have any questions or feedback!
      </p>
    </div>

  );
}

export default TasksPage;