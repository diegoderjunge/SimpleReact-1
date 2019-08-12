import React from 'react';
import logo from './logo.svg';
import './App.css';
// Tengo un error al renderear TypeError: Cannot read property 'props' of undefined
// En la linea 18
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
            {this.props.todos.map(todo => (
              <li key={todo.id}>
              <input type="checkbox" defaultChecked={todo.isComplete}/> 
              {todo.name}
          </li>
            ))}
            
            
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
