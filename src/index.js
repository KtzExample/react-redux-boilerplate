import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './core/redux/todo/reducers';
import thunk from 'redux-thunk'

let store = createStore(
    todoApp,
    compose(
        applyMiddleware(thunk)
    )
);

let rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);