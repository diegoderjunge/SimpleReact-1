import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React with Redux</h2>
      </header>
      <div className="Todo-App">
        <form>
          <input type="text" />
        </form>
        <div className="Todo-List">
          <ul>
            <li>
              <input type="checkbox" /> Create static UI
          </li>
            <li>
              <input type="checkbox" /> Create initial state
          </li>
            <li>
              <input type="checkbox" /> Create State to render UI
          </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
