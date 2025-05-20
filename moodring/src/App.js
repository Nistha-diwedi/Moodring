import React, { useState } from 'react';
import './App.css';

function App() {
  const moodData = {
    '😊 Happy': '#ffe066',
    '😢 Sad': '#74c0fc',
    '😡 Angry': '#ff6b6b',
    '😴 Sleepy': '#a29bfe',
    '😂 Silly': '#fab1a0',
    '🤔 Curious': '#81ecec'
  };

  const moods = Object.keys(moodData);
  const [mood, setMood] = useState('😊 Happy');
  const [history, setHistory] = useState(['😊 Happy']);

  const changeMood = () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(randomMood);
    setHistory(prev => [randomMood, ...prev.slice(0, 4)]); // Keep last 5 moods
  };

  const shareOnTwitter = () => {
    const tweetText = `I'm feeling ${mood} today! #MoodRingApp`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="App" style={{ backgroundColor: moodData[mood] }}>
      <header className="App-header">
        <h1>MoodRing</h1>
        <p>Current mood: <strong>{mood}</strong></p>
        <button onClick={changeMood}>Change Mood</button>
        <button className="twitter" onClick={shareOnTwitter}>Share on Twitter</button>

        <h3>Last 5 Moods</h3>
        <ul className="history">
          {history.map((m, index) => (
            <li key={index}>{m}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
