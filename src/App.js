import React, {Component} from 'react';
import './App.css';
import Search from './components/search/Search';
import PokemonResume from './components/pokemon-resume/PokemonResume';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonList: [],
      pokeFiltered: []
    }
    this.seachPokemonHandler = this.seachPokemonHandler.bind(this);
  }
  
  getallPokemon() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(response => {
      this.setState({
        pokemonList: response.data.results,
        pokeFiltered: response.data.results
      });
    });
  }

  componentDidMount() {
    this.getallPokemon();
  }

  seachPokemonHandler(name) {
    const newList = [...this.state.pokemonList];
    const pokeFilter = newList.filter((e) => e.name.toLowerCase().includes(name.name.toLowerCase()));
    this.setState({ pokeFiltered: pokeFilter });
  }

  render() {
      return (
        <div className="App">
          <Link to='/'><div className='navbar'><img src='https://cdn.bulbagarden.net/upload/archive/4/4b/20100413180610%21Pok%C3%A9dex_logo.png' alt='pokedex'></img> </div></Link>
          <Search search={this.seachPokemonHandler} pokemons={this.state.pokemonList}/>
          <PokemonResume pokemons={this.state.pokeFiltered}/>
          <div className='navbar'><img src='https://cdn.bulbagarden.net/upload/archive/4/4b/20100413180610%21Pok%C3%A9dex_logo.png' alt='pokedex'></img></div>
        </div>
      );
  }
}

export default App;
