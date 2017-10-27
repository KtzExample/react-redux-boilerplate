/**
 * Created by ktz on 17. 2. 25.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={(e) => this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }

    handleClick(e) {
        let text = this.refs.input.value;
        this.props.addToDo(text);
        this.refs.input.value = '';
    }
}

AddTodo.propTypes = {
    addToDo: PropTypes.func.isRequired,
};