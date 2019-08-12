import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

const render = () => {
    const state = store.getState()
    ReactDOM.render(<App todos={state.todos}/>, document.getElementById('root'));
    
}
render()
store.subscribe(render)

setTimeout(()=> {
    store.dispatch({type: 'TODO_ADD', payload: {id: 4,name:'New Todo',isComplete:false}})

},1000)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
