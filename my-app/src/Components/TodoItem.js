import React from 'react';

function TodoItem({ todo, onToggle }) {
  return (
    <li
      onClick={onToggle}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;