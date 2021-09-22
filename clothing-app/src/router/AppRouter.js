import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../components/homepage/HomePage';
import Header from '../components/header/Header';
import CollectionsPage from '../components/collections/CollectionsPage';

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Header/>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/collections' component={CollectionsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
