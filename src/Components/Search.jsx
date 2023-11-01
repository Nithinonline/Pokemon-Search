import React, { Component } from 'react'

export class Search extends Component {
    
    searchFunction(event){
        {this.setState({search:event.target.value})}
        
       }
  render() {
   
    return (
        
      <div> <input className='search-box' type="search" placeholder='search pokemon' onChange={this.searchFunction}/> </div>
    )
  }
}

export default Search