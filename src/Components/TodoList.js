import React from 'react'
const TodoItem = ({id, name,isCon}) => (
<li key={todo.id}>
              <input type="checkbox" defaultChecked={isComplete}/> 
              {name}
          </li>
)
export default (props) => (
    <div className="Todo-List">
          <ul>
            {props.todos.map(todo => ( <TodoItem{...todo.id}/>
              
            ))}
            
            
          </ul>
        </div>
)
