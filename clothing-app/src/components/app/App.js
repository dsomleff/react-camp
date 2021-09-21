import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import Header from '../../components/header/Header';
import CollectionsPage from '../collections/CollectionsPage';
import AuthPage from '../auth/AuthPage';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/collections' component={CollectionsPage} />
          <Route path='/sign-in' component={AuthPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
