import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddle = createSagaMiddleware(); 
const store = createStore(reducer,composeEnhance(applyMiddleware(sagaMiddle)))

sagaMiddle.run();

ReactDOM.render(
<Provider store={store}>
    <Router>
        <Route exact path="/" />
        <App />
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
