import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from My DASH Component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from My ADD Expense Component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from My EDIT Expense Component
  </div>
);

const HelpPage = () => (
  <div>
    This is from My HELP Component
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ ExpenseDashboardPage } exact={ true } />
      <Route path="/create" component={ AddExpensePage } />
      <Route path="/edit" component={ EditExpensePage } />
      <Route path="/help" component={ HelpPage } />
    </div>
  </BrowserRouter>
);

/** Usage Components Section */
ReactDOM.render(routes, document.getElementById('app'));
