import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase';
import LoadingPage from './components/LoadingPage';

/** Usage Redux Store */
const store = configureStore();

/** Usage Components Section */
const jsx = (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
