import React from 'react'
import {connect} from 'react-redux'
//Tira error aqui 
const TodoItem = ({ id, name, isComplete }) => (
  <li>
    <input type="checkbox" defaultChecked={isComplete} />
    {name}
  </li>
)

const TodoList (props) =>console.log("Rendering list") ||( 
  <div className="Todo-List">
    <ul>
      {props.todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
)

export default connect(
    (state) => ({todos:state.todos})
)(TodoList)