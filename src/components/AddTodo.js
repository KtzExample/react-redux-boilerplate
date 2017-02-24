/**
 * Created by ktz on 17. 2. 25.
 */
import React, { findDOMNode, Component, PropTypes } from 'react';

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
        // const node = findDOMNode(this.refs.input);
        // const text = node.value.trim();
        let text = this.refs.input.value;
        this.props.onAddClick(text);
        this.refs.input.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};