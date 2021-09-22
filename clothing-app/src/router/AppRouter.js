import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/homepage/HomePage';
import Header from '../components/header/Header';
import CollectionsPage from '../components/collections/CollectionsPage';
import AuthPage from '../components/auth/AuthPage';

function AppRouter() {
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

export default AppRouter;
