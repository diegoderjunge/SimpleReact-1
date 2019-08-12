import {createstore, createStore} from 'redux'
import reducer from './reducers/todo'
import { createSecretKey } from 'crypto';

export default createStore(reducer)