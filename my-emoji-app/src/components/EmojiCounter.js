import React, { useState } from 'react';
import Emoji from './Emoji';
import './EmojiCounter.css';


function EmojiCounter() {
  const [emojis, setEmojis] = useState([
    { emoji: '😊', count: 0 },
    { emoji: '😄', count: 0 },
    { emoji: '😍', count: 0 },
  ]);

  const [winner, setWinner] = useState('');

  const handleClick = (index) => {
    const newEmojis = [...emojis];
    newEmojis[index].count += 1;
    setEmojis(newEmojis);
  };

  const showResults = () => {
    const maxCount = Math.max(...emojis.map((emoji) => emoji.count));
    const winningEmoji = emojis.find((emoji) => emoji.count === maxCount);
    setWinner(winningEmoji.emoji);
  };

  return (
    <div id='conteiner'>
      <h1>Emoji Counter</h1>
      <ul>
        {emojis.map((emoji, index) => (
          <Emoji
            key={index}
            emoji={emoji.emoji}
            count={emoji.count}
            onClick={() => handleClick(index)}
          />
        ))}
      </ul>
      <button onClick={showResults}>Show Results</button>
      {winner && <p>Winner: {winner}</p>}
    </div>
  );
}

export default EmojiCounter;