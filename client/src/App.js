import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './aboutUs'; // Import the About component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the App</h1>
        <About /> {/* Use the About component */}
      </header>
    </div>
  );
}

export default App;
