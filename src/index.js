import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer';

const reduxStore = configureStore({
  reducer: mainReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware(thunk)})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

