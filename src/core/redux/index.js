/**
 * Created by ktz on 2017. 2. 25..
 */

import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import * as ToDoReducers from './todo/reducers';

const ToDoStore = combineReducers(ToDoReducers);

export const rootStore = combineReducers({
    ToDoReducers: ToDoStore,
    routing: routerReducer
});