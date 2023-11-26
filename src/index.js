import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { myReducer } from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

const depo = createStore(myReducer , composeWithDevTools(applyMiddleware(thunk , logger)))

root.render(
  <Provider store={depo}>
  <BrowserRouter>
    <>
    <ToastContainer />
      <App />
    </>
  </BrowserRouter>
  </Provider>
);
