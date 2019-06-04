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
            return (
              <div className='poke-name' key={idx}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx+1}.png`} alt={`${element.name}`} />
                
                <div>{element.name[0].toUpperCase()+element.name.slice(1)}<div>Index: {idx+1}</div></div>
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default PokemonResume;