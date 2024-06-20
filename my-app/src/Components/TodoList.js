import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onToggle={() => onToggleTodo(index)} />
      ))}
    </ul>
  );
}

export default TodoList;