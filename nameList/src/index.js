import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={configStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);