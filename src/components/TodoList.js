/**
 * Created by ktz on 17. 2. 25.
 */
import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../core/redux/todo/actionTypes'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                { this.renderToDoList() }
            </ul>
        );
    }

    renderToDoList() {
        switch (this.props.visibilityFilter) {
            case SHOW_ALL:
                return this.props.todos.map((todo, index) => {
                    return this.makeToDo(todo, index)
                });
            case SHOW_ACTIVE:
                return this.props.todos.filter((todo, index) => {
                    return todo.completed === false;
                }).map((todo, index) => {
                    return this.makeToDo(todo, index);
                });
            case SHOW_COMPLETED:
                return this.props.todos.filter((todo, index) => {
                    return todo.completed === true
                }).map((todo, index) => {
                    return this.makeToDo(todo, index);
                });
            default:
                return this.props.todos.map((todo, index) => {
                    return this.makeToDo(todo, index)
                });
        }
    }

    makeToDo(todo, index) {
        return <Todo
            text={todo.text}
            completed={todo.completed}
            key={index}
            index={index}
            completeTodo={this.props.completeTodo}/>
    }
}

TodoList.propTypes = {
    completeTodo: PropTypes.func.isRequired,
    visibilityFilter: PropTypes.oneOf([SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE]),
    todos: React.PropTypes.object
};