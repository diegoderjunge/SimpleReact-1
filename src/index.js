import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
//import {bindActionCreators} from 'redux'
//import {updateCurrent} from './reducers/todo'
import { dispatch } from 'rxjs/internal/observable/range';





    ReactDOM.render(
    <Provider store={store}>
    <App 
   
    />
    </Provider>,
    document.getElementById('root'));
    




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
