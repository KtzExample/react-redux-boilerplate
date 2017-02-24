/**
 * Created by ktz on 17. 2. 25.
 */

import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER} from './actionTypes';

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function addTodo(text) {
    return { type: ADD_TODO, text };
}

export function completeTodo(index) {
    return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}