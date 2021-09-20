import HomePage from '../homepage/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const HatsPage = (props) => (
  <div>
  {console.log(props)}
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
