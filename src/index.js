import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.scss';
import App from './App/App.js';
import * as serviceWorker from './serviceWorker';
import { changePage } from './App/reducers.js';
import { changeLoginField, updateLoginInfo } from './App/components/Sections/Login/LoginForm/reducers.js';

const rootReducer = combineReducers({ changePage, changeLoginField, updateLoginInfo });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
