import { Component } from 'react';
import { CardList } from './components/card-list/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monster"
          onChange={e => this.setState({ searchFiled: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
