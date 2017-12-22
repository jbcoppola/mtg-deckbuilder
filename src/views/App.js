import React, { Component } from 'react';
import '../App.css';
import CardList from './card-list';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cardList: []
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let url = 'https://api.magicthegathering.io/v1/cards';
    var form = new FormData(event.target);
    for (var pair of form.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    return axios({
      request: 'get',
      url: url,
      params: {
        name: this.state.name
      }
    })
      .then((response) => {
        this.setState({
          cardList: response.data.cards
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
          <p>Unofficial</p>
          <p className="magic">Magic: the Gathering</p>
          <p>Deckbuilder</p>
          </h1>
        </header>
        <p className="App-intro">
          Pick parameters for cards and click "View Cards" button to return a list of cards. Select from results to add to deck.
        </p>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div>
            <p>Name</p>
            <input name='name' type='text' placeholder='Name' value={this.state.name} onChange = {this.handleChange} />
          </div>
          <div>
            <p>Converted mana cost</p>
            <input name='cmc' type='text' placeholder='CMC' />
          </div>
          <div>
            <p>Colors</p> 
            <input name='color1' type='text' placeholder='Color 1' />
            <input name='color2' type='text' placeholder='Color 2' />
            <input name='color3' type='text' placeholder='Color 3' />
          </div>
          <div>
            <p>Type</p>
            <input name='type' type='text' placeholder='Type' />
          </div>
          <div>
            <p>Supertypes</p>
            <input name='supertype1' type='text' placeholder='Supertype 1'/>
            <input name='supertype2' type='text' placeholder='Supertype 2'/>
          </div>
          <div>
            <p>Types</p>
            <input name='type1' type='text' placeholder='Type 1' />
            <input name='type2' type='text' placeholder='Type 2' />
          </div>
          <div>
            <p>Subtypes</p>
            <input name='subtype1' type='text' placeholder='Subtype 1' />
            <input name='subtype2' type='text' placeholder='Subtype 2' />
            <input name='subtype3' type='text' placeholder='Subtype 3' />
          </div>
          <div>
            <p>Rarity</p>
            <input name='rarity' type='text' placeholder='Rarity' />
          </div>
          <div>
            <p>Set Name</p>
            <input name='setName' type='text' placeholder='Set Name' />
          </div>
          <div>
            <p>Number</p>
            <input name='number' type='text' placeholder='Number' />
          </div>
          <div>
            <p>Power / Toughness</p>
            <input name='power' type='text' placeholder='Power' />
            <p className='seperator'>/</p>
            <input name='toughness' type='text' placeholder='Toughness' />
          </div>
          <div>
            <p>Language</p>
            <input name='language' type='text' placeholder='Language' />
          </div>
          <div>
            <p>Order by</p>
            <input name='orderBy' type='text' placeholder='Order By' />
          </div>
          <div>
            <p>Id</p>
            <input name='id' type='text' placeholder='Unique ID' />
          </div>
          <div>
            <p>Results to display (max / default 100)</p>
            <input name='pageSize' type='text' placeholder='Results size' />
          </div>
          <button type='Submit'>Search</button>
        </form>
        <div className="search-results">
            <CardList cardList={this.state.cardList} />
        </div>
      </div>
    );
  }
}

export default App;
