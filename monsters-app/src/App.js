import { Component } from 'react';
import { CardList } from './components/card-list/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="Ju Ju">
          {
            this.state.monsters.map(monster => <h1 key={monster.name}>{ monster.name }</h1>)
          }
        </CardList>
      </div>
    );
  }
}

export default App;