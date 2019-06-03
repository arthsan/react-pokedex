import React, {Component} from 'react';
import '../pokemon-resume/pokemon-resume.css'

class PokemonResume extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div className='poke-block'>
        {
          this.props.pokemons.map((element, idx) => {
            if(`https://img.pokemondb.net/sprites/sun-moon/icon/${element.name}.png` === null) {
              return (
                <div className='poke-name' key={idx}>
                  <img className='sprites' src={`https://img.pokemondb.net/sprites/sun-moon/normal/${element.name}.png`} alt={`${element.name}`} />
                  <div>{element.name}</div>
                </div>
              )
            }
            return (
              <div className='poke-name' key={idx}>
                <img className='sprites' src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${element.name}.png`} alt={`${element.name}`} />
                <div>{element.name}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default PokemonResume;