import React, { Component } from 'react';
import '../search/search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',   
    }
    this.handlerChange = this.handlerChange.bind(this);  
  }
  
  handlerChange(event) {
    let { name, value } = event.target;    
    this.setState({[name]: value}, () =>{
      this.props.pokemons.results(this.state.name)    
    })
  }
  
  render() {
    return (
      <div className="search-row">
        <div></div>
        <h2>Search for Pokemon</h2>
        <div className="search-container search-tag">        
          <input className="search" type="text" name="name" value={this.state.model} onChange={(e)=> this.handlerChange(e)}></input>
        </div>
      </div>
    )  
  }
}

export default Search;