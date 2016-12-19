import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import { rootReducer } from './reducers/index';
import { Provider } from 'react-redux';
import store from './store';





const container = document.getElementById('container');
ReactDOM.render(<Provider store={store}><App/></Provider>, container);
