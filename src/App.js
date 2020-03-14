import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => this.setState({ monsters: res }))
      .catch(e => console.error(e));
  }

  onSearch = (e) => {
    this.setState({ 'search': e.target.value });
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Search for Monsters'
          handleChange={this.onSearch} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
