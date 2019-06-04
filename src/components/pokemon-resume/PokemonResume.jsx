import React, {Component} from 'react';
import '../pokemon-resume/pokemon-resume.css'
import {Link} from 'react-router-dom'

class PokemonResume extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  clickPok = (pokeInfo) => {
    this.props.setPokeInfo(pokeInfo)
  }

  render() {
    return(
      <div className='poke-block'>
        {
          this.props.pokemons.map((element, idx) => {
            return (
            <Link to={{pathname:`/${element.name}`, state: {element}}} onClick={this.clickPok} pokeInfo={this.props} >
              <div className='poke-name' key={idx}>
                <img className='sprites' src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${element.name}.png`} alt={`${element.name}`} />
                
                <div>{element.name[0].toUpperCase()+element.name.slice(1)}<div>Index: {idx+1}</div></div>
              </div>
            </Link>
            )
          })
        }
      </div>
    )
  }
}


export default PokemonResume;