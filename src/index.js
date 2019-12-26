import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { Provider } from "react-redux"
import rootReducer from "./reducers"
const initialState = {}
const middlwwares = [thunk]

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlwwares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();

