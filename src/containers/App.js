import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as ToDoActions from '../core/redux/todo/actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <AddTodo
                    addToDo={this.props.ToDoActions.addTodo} />
                <TodoList
                    todos={this.props.todos}
                    completeTodo={this.props.ToDoActions.completeTodo}
                    visibilityFilter={this.props.visibilityFilter}/>
                <Footer
                    filter={this.props.visibilityFilter}
                    setVisibilityFilter={this.props.ToDoActions.setVisibilityFilter} />
            </div>
        );
    }
}

App.PropTypes = {
    todos: React.PropTypes.object,
    visibilityFilter: React.string,
    ToDoActions: React.PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch) =>  {
    return {
        dispatch: dispatch,
        ToDoActions: bindActionCreators(ToDoActions, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);