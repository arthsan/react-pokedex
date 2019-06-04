import React, {Component} from 'react';
import './App.css';
import Search from './components/search/Search';
import PokemonResume from './components/pokemon-resume/PokemonResume';
import { Link, Switch, Route } from 'react-router-dom';
import PokemonDetail from './components/pokemon-detail/PokemonDetail'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonList: [],
      pokeInfo: null
    }
    this.seachPokemonHandler = this.seachPokemonHandler.bind(this);
  }
  
  getallPokemon() {
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
    this.getallPokemon();
  }

  seachPokemonHandler(name) {
    console.log(name)
    this.getPokemon()
    .then(res => {
      if (name.length === 0) {
        this.setState({pokemonList: [],});
      } else {
        const pokeFilter = res.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
        this.setState({ pokemonList: pokeFilter })
      }
    })
    .catch(error => console.log(error))
  }

  setPokeInfo = (pokeInfo) => {
    this.setState({ 
      pokeInfo: pokeInfo })
  } 

  render() {
      return (
        <div className="App">
          <Link to='/'><div className='navbar'><img src='https://cdn.bulbagarden.net/upload/archive/4/4b/20100413180610%21Pok%C3%A9dex_logo.png' alt='pokedex'></img> </div></Link>
          <Search search={this.seachPokemonHandler} pokemons={this.state.pokemonList}/>
          <Switch>
            <Route exact path='/' render={() => <PokemonResume pokemons={this.state.pokemonList} setPokeInfo={this.setPokeInfo}/>}/>
            <Route path='/:name' render={() => <PokemonDetail pokeInfo={this.state.pokeInfo}/>}/>
          </Switch>
          <div className='navbar'><img src='https://cdn.bulbagarden.net/upload/archive/4/4b/20100413180610%21Pok%C3%A9dex_logo.png' alt='pokedex'></img></div>
        </div>
      );
  }
}

export default App;
