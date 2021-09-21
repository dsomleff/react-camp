import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import CollectionsPage from '../collections/CollectionsPage';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/collections' component={CollectionsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
