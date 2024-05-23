import React from 'react';

function Emoji({ emoji, count, onClick }) {
  return (
    <li>
      <span>{emoji}</span>
      <button onClick={onClick} id='btn'>Vote</button>
      <span>{count}</span>
    </li>
  );
}

export default Emoji;