import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
// Tengo un error al renderear TypeError: Cannot read property 'props' of undefined
// En la linea 18
class App extends Component() {
  render ( ){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </header>
        <div className="Todo-App">
          <TodoForm 
          currentTodo={this.props.currentTodo}
          changeCurrent={this.props.changeCurrent}
          />
          <TodoList todos={this.props}/>
        </div>
  
      </div>
    );
  }
  
}

export default App;
