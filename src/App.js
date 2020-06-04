import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState(null)

  const handleClick = async (e) => {
    const response = await fetch("/api/hello")
    const data = await response.json()
    setText(data.text)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text || "Click below to load"}
        </p>
        <a
          className="App-link"
          onClick={handleClick}
        >
          Click to load a message
        </a>
      </header>
    </div>
  );
}

export default App;
