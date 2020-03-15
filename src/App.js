import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends React.Component {
  // constructor(props) {
  //  super(props);....
  // }--> This is a good practice
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: '',
      count: 1
    };
  }
  componentDidCatch

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => this.setState({ monsters: res }))
      .catch(e => console.error(e));
  }

  onSearch = (e) => {
    this.setState({ 'search': e.target.value });
  }

  handleClick = (e) => {
    // This sort of syntax is to be used when calculation(s) are made
    // using the formerState & update it to the current state
    // Similarly for prevProps as well
    this.setState((prevState, prevProps) => {
      return { count: prevState.count + 1 }
    });
  };

  render() {
    const { monsters, search, count } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <h2>{count}</h2>
        <button onClick={this.handleClick}>Click Me</button>
        <SearchBox placeholder='Search for Monsters'
          handleChange={this.onSearch} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
