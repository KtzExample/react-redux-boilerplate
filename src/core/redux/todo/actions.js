/**
 * Created by ktz on 17. 2. 25.
 */

import { createAction } from 'redux-actions'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';

/*
 * action creators
 */

export function addTodo(text) {
    return (dispatch, getState) => {
        dispatch(createAction(ADD_TODO)({text: text}));
    };
}

export function completeTodo(index) {
    return (dispatch, getState) => {
        dispatch(createAction(COMPLETE_TODO)({index: index}));
    };
}

export function setVisibilityFilter(filter) {
    return (dispatch, getState) => {
        dispatch(createAction(SET_VISIBILITY_FILTER)({filter: filter}));
    };
}