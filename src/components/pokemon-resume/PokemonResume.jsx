import React, {Component} from 'react';

class PokemonResume extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return(
      <div>
        {
          this.props.pokemons.map((element, idx) => {
            return (
              <div key={idx}>
                <img className="sprites" src={`https://img.pokemondb.net/sprites/sun-moon/icon/${element.name}.png`} />
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