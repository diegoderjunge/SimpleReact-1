import { expression } from "@babel/template";

const initState = {
    todos: [],
    currentTodo:'temp'
}
export default (state= initState, action) => {
    switch(action.type){
        case 'TODO_ADD':
        return {...state, todos: state.todos.concat(action.payload)}
        case 'CURRENT_UPDATE':
        return {...state,currentTodo: action.payload}
        default:
    }
    return state
}