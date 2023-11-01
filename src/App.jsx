// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React, { Component } from 'react'
import Display from './Components/Display'
import './App.css'
// import Search from './Components/Search'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      search: ""
    }
  }
  componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon"
    const fetched = fetch(url)
      .then((fetched) => fetched.json())
      .then((fetched) => { this.setState({ pokemon: fetched.results }) })
    // .then((fetched)=>console.log(fetched))
  }
  handleChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => { return { search: searchField } })
  }


  render() {
    const filteredPokemon = this.state.pokemon.filter((item) => item.name.toLowerCase().includes(this.state.search.toLowerCase()))
    // console.log(this.state.pokemon)
    return (

      <>
        <div className='searchbar' >
          <input className='search-box' type="search" placeholder='Search Pokemon..' value={this.state.search} onChange={this.handleChange} />

          <div className='card-list'>

            {filteredPokemon.map((item, index) => (
              <div className='card-container'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index + 1}.png`} />
                <ul key={index}>{item.name}</ul>
              </div>

            ))}
          </div>

        </div>



      </>
    )
  }
}
export default App