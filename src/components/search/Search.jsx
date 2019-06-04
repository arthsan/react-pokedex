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
      this.props.search(this.state)
    })
  }
  
  render() {
    return (
      <div className="search-row">
        <div></div>
        <h2>Search for Pokemon</h2>
        <div>        
          <input className="search" type="text" name="name" value={this.state.name} onChange={(e)=> this.handlerChange(e)}></input>
        </div>
      </div>
    )  
  }
}

export default Search;