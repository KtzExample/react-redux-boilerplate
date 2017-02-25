/**
 * Created by ktz on 2017. 2. 25..
 */

import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import ToDoReducers from './todo/reducers';

const ToDoStore = combineReducers({
    ToDoReducers: ToDoReducers,
    routing: routerReducer
});

export default ToDoStore;