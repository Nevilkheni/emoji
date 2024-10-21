import React, { useState } from 'react';
import './Emoji.css';

const Emoji = () => {
  const emojis = [
    { emoji: '😀', name: 'Grinning Face' },
    { emoji: '😂', name: 'Face with Tears of Joy' },
    { emoji: '🥳', name: 'Partying Face' },
    { emoji: '😍', name: 'Smiling Face with Heart-Eyes' },
    { emoji: '🤩', name: 'Star-Struck' },
    { emoji: '😎', name: 'Smiling Face with Sunglasses' },
    { emoji: '🙃', name: 'Upside-Down Face' },
    { emoji: '😴', name: 'Sleeping Face' },
    { emoji: '🤔', name: 'Thinking Face' },
    { emoji: '😇', name: 'Smiling Face with Halo' },
  ];
  
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F6', '#33FFF3', '#FFD700', '#FF6347', '#40E0D0','#FFA07A','	#FFDAB9'];

  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const changeEmojiAndColor = () => {
    const randomEmojiIndex = Math.floor(Math.random() * emojis.length);
    const randomColorIndex = Math.floor(Math.random() * colors.length);

    setCurrentEmoji(emojis[randomEmojiIndex]);
    setBgColor(colors[randomColorIndex]);
  };

  return (
    <div className='main' style={{ backgroundColor: bgColor }}>
      <button 
        onClick={changeEmojiAndColor} 
        className='emoji-button'
      >
        {currentEmoji.emoji}
      </button>
      <h2 className='emoji-name'>{currentEmoji.name}</h2>
    </div>
  );
};

export default Emoji;
