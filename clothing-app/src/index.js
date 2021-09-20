import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import App from './pages/app/App';
import HomePage from './pages/homepage/HomePage';
import './styles/index.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
