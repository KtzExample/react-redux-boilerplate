/**
 * Created by ktz on 17. 2. 25.
 */
import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <li
                onClick={this.props.onClick}
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
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};