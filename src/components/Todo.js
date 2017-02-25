/**
 * Created by ktz on 17. 2. 25.
 */
import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <li
                onClick={event => this.completeToDo(event)}
                style={this.getStyle()}>
                {this.props.text}
            </li>
        );
    }

    getStyle() {
        return {
            textDecoration: this.props.completed ? 'line-through' : 'none',
            cursor: this.props.completed ? 'default' : 'pointer'
        }
    }

    completeToDo(event) {
        this.props.completeTodo(this.props.index)
    }
}

Todo.propTypes = {
    completeTodo: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number,
    completed: PropTypes.bool.isRequired
};