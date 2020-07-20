import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { sagaWatch } from './redux/sagas';

const saga = createSagaMiddleware();
 
const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatch)

const app = 
    <Provider store={store}>
        <App />
    </Provider>;

ReactDOM.render(
    app,
    document.getElementById('root')
)