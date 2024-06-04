import React, { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const handleToggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, completed: false }]);
  };

  return (
    <div className="App">
      <h1>Список дел</h1>
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} />
      <TodoForm onAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
