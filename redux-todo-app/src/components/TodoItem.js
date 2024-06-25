import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/todosSlice';

function TodoItem({ todo, index }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(index));
  };

  return (
    <li
      onClick={handleToggle}
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
