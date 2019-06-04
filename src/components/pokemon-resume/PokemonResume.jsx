import React, {Component} from 'react';
import '../pokemon-resume/pokemon-resume.css'

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
            if(idx < 721) {
              return (
                <div className='poke-name' key={idx}>
                  <img className='sprites' src={`https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${element.name}.png`} alt={`${element.name}`} />
                  
                  <div>{element.name[0].toUpperCase()+element.name.slice(1)}<div>Index: {idx+1}</div></div>
                </div>
              )
            } else if(idx === 773) {
                return (
                  <div className='poke-name' key={idx}>
                    <img className='sprites' src={`https://img.pokemondb.net/sprites/sun-moon/normal/minior-meteor.png`} alt={`${element.name}`} />
                    
                    <div>{element.name[0].toUpperCase()+element.name.slice(1)}<div>Index: {idx+1}</div></div>
                  </div>
                )
            } else if(idx === 777) {
              return (
                <div className='poke-name' key={idx}>
                  <img className='sprites' src={`https://img.pokemondb.net/sprites/sun-moon/normal/mimikyu.png`} alt={`${element.name}`} />
                  
                  <div>{element.name[0].toUpperCase()+element.name.slice(1)}<div>Index: {idx+1}</div></div>
                </div>
              )
          }
            else {
              return (
                <div className='poke-name' key={idx}>
                  <img className='sprites' src={`https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/normal/${element.name}.png`} alt={`${element.name}`} />
                  
                  <div>{element.name[0].toUpperCase()+element.name.slice(1)}<div>Index: {idx+1}</div></div>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}


export default PokemonResume;