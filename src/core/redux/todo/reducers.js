/**
 * Created by ktz on 17. 2. 25.
 */
import { combineReducers } from 'redux';
import { SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO, SHOW_ALL } from './actionTypes';
import {List} from 'immutable'

export function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
}

const initialToDos = List();
export function todos(state = initialToDos, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.push({
                text: action.payload.text,
                completed: false
            });
        case COMPLETE_TODO:
            return state.update(action.payload.index, todo => {
                return Object.assign({}, todo, {completed: !todo.completed})
            });
        default:
            return state;
    }
}

const ToDoReducers = combineReducers({
    visibilityFilter,
    todos
});

export default ToDoReducers;