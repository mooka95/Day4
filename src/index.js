import React from 'react';
import {render }from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
const createStoreWithMW = applyMiddleware(/*middlewares*/ )(createStore)

render(<Provider  store={createStoreWithMW(reducers)}>
  
  <App />
  
  
  </Provider>,
  document.getElementById('root'));


reportWebVitals();
