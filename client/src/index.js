import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from "react-redux";

// Create the root element for ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
// Wrap the App component with Provider to make the Redux store available to the entire app
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);


