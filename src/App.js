import React, {Component} from 'react';
import './App.css';
import Search from './components/search/Search'
import PokemonDetail from './components/pokemon-detail/PokemonDetail'
import PokemonResume from './components/pokemon-resume/PokemonResume'
import {Link, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonList: [],
    }
  }
  
  getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=964", {
      method: "GET"
    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          console.log(json);
          this.setState({
            pokemonList: json.results
          });
        });
      }
    });
  }

  componentDidMount() {
    this.getPokemon();
  }

  render() {
      return (
        <div className="App">
          <div className='navbar'>Pokemons</div>
          <Search pokemons={this.state.pokemonList}/>
          <PokemonResume pokemons={this.state.pokemonList} />
          <div className='navbar'>Pokemons</div>
        </div>
      );
  }
}

export default App;
