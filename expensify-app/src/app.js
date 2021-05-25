import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go Home</Link>
  </div>
);

const Header =() => (
  <header>
    <h1>Expensify App</h1>
    <ul>
      <li>
        <NavLink activeClassName="is-active" to="/" exact={ true }>
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="is-active" to="/create">
          Create Expense
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="is-active" to="/edit">
          Edit Expense
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="is-active" to="/help">
          Help
        </NavLink>
      </li>
    </ul>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ ExpenseDashboardPage } exact={ true } />
        <Route path="/create" component={ AddExpensePage } />
        <Route path="/edit" component={ EditExpensePage } />
        <Route path="/help" component={ HelpPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </BrowserRouter>
);

/** Usage Components Section */
ReactDOM.render(routes, document.getElementById('app'));
