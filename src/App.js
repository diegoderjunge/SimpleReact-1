import React,{Component}from 'react';
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
// Tengo un error al renderear TypeError: Cannot read property 'props' of undefined
// En la linea 18
//import {bindActionCreators} from 'redux'
import {updateCurrent} from './reducers/todo'

export class App extends Component{

  

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
          changeCurrent={this.props.updateCurrent}
          />
          <TodoList todos={this.props}/>
        </div>
  
      </div>
    );
  }
  
}

export default connect(
  (state)=>state,
  {updateCurrent})(App)

//export default App
