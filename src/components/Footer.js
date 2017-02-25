/**
 * Created by ktz on 17. 2. 25.
 */
import React, { Component, PropTypes } from 'react';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from '../core/redux/todo/actionTypes'

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }

        return (
            <a href='#' onClick={e => {
                e.preventDefault();
                this.props.setVisibilityFilter(filter);
            }}>
                {name}
            </a>
        );
    }

    render() {
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter(SHOW_ALL, 'All')}
                {', '}
                {this.renderFilter(SHOW_COMPLETED, 'Completed')}
                {', '}
                {this.renderFilter(SHOW_ACTIVE, 'Active')}
                .
            </p>
        );
    }
}

Footer.propTypes = {
    setVisibilityFilter: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE]),

};