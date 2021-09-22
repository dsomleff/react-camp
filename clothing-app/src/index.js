import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
// import store from './redux/store/configureStore';
import './index.css';

ReactDOM.render(
  <React.StrictMode>

      <AppRouter />

  </React.StrictMode>,
  document.getElementById('root')
);

// <Provider store={store}>
// </Provider>
