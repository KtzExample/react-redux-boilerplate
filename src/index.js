import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './core/redux/reducers';
import thunk from 'redux-thunk'

let store = createStore(
    todoApp,
    compose(
        applyMiddleware(thunk)
    )
);

let rootElement = document.getElementById('root');
render(
    // React 0.13의 이슈를 회피하기 위해
    // 반드시 함수로 감싸줍니다.
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);