import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ToDoActions from '../core/redux/todo/actions';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../core/redux/todo/actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo
                    onAddClick={text =>
                        ToDoActions.addTodo(text)
                    } />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index =>
                        ToDoActions.completeTodo(index)
                    } />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter =>
                        ToDoActions.setVisibilityFilter(nextFilter)
                    } />
            </div>
        );
    }
}

App.propTypes = {
    ToDoStore: React.PropTypes.object,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
};

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        ToDoStore: state.ToDoStore,
    };
};

const mapDispatchToProps = (dispatch) =>  {
    return {
        dispatch: dispatch,
        ToDoActions: bindActionCreators(ToDoActions, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);