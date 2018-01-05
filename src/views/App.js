import React, { Component } from 'react';
import '../App.css';
import CardList from './card-list';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      power: '',
      toughness: '',
      language: '',
      orderBy: '',
      supertype1: '',
      supertype2: '',
      types1: '',
      types2: '',
      subtype1: '',
      subtype2: '',
      subtype3: '',
      setName: '',
      number: '',
      color1: '',
      color2: '',
      color3: '',
      id: '',
      cardList: []
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  listArray(array) {
    let str = '';
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== '') { 
        str += array[i]; 
      }
      if (array[i + 1] !== '' && array[i + 1] !== undefined) {
        str += ',';
      }
    }
    return str;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let url = 'https://api.magicthegathering.io/v1/cards';
    var form = new FormData(event.target);
    for (var pair of form.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    var types = [this.state.types1, this.state.types2];
    var supertype = [this.state.supertype1, this.state.supertype2];
    var subtype = [this.state.subtype1, this.state.subtype2, this.state.subtype3];
    var color = [this.state.color1, this.state.color2, this.state.color3];

    return axios({
      request: 'get',
      url: url,
      params: {
        name: this.state.name,
        type: this.state.type,
        power: this.state.power,
        toughness: this.state.toughness,
        types: this.listArray(types),
        language: this.state.langugage,
        colors: this.listArray(color),
        supertypes: this.listArray(supertype),
        setName: this.state.setName,
        orderBy: this.state.orderBy,
        subtypes: this.listArray(subtype),
        id: this.state.id,
        orderBy: this.state.orderBy
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
            <select name="color1" value={this.state.color1} onChange={this.handleChange}>
              <option value="" disabled selected hidden>Color 1</option>
              <option value="" >Unknown</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
            </select> 
            <select name="color2" value={this.state.color2} onChange={this.handleChange}>
              <option value="" disabled selected hidden>Color 2</option>
              <option value="" >Unknown</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
            </select> 
            <select name="color3" value={this.state.color3} onChange={this.handleChange}>
              <option value="" disabled selected hidden>Color 3</option>
              <option value="" >Unknown</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
            </select> 
          </div>
          <div>
            <p>Type</p>
            <input name='type' type='text' placeholder='Type' value={this.state.type} onChange = {this.handleChange}/>
          </div>
          <div>
            <p>Supertypes</p>
            <input name='supertype1' type='text' placeholder='Supertype 1' value={this.state.supertype1} onChange={this.handleChange} />
            <input name='supertype2' type='text' placeholder='Supertype 2' value={this.state.supertype2} onChange={this.handleChange} />
          </div>
          <div>
            <p>Types</p>
            <input name='types1' type='text' placeholder='Type 1' value={this.state.types1} onChange={this.handleChange} />
            <input name='types2' type='text' placeholder='Type 2' value={this.state.types2} onChange={this.handleChange} />
          </div>
          <div>
            <p>Subtypes</p>
            <input name='subtype1' type='text' placeholder='Subtype 1' value={this.state.subtype1} onChange={this.handleChange} />
            <input name='subtype2' type='text' placeholder='Subtype 2' value={this.state.subtype2} onChange={this.handleChange} />
            <input name='subtype3' type='text' placeholder='Subtype 3' value={this.state.subtype3} onChange={this.handleChange} />
          </div>
          <div>
            <p>Rarity</p>
            <input name='rarity' type='text' placeholder='Rarity' value={this.state.rarity} onChange = {this.handleChange} />
          </div>
          <div>
            <p>Set Name</p>
            <input name='setName' type='text' placeholder='Set Name' value={this.state.setName} onChange = {this.handleChange} />
          </div>
          <div>
            <p>Number</p>
            <input name='number' type='text' placeholder='Number' value={this.state.number} onChange = {this.handleChange} />
          </div>
          <div>
            <p>Power / Toughness</p>
            <input name='power' type='text' placeholder='Power' value={this.state.power} onChange = {this.handleChange} />
            <p className='seperator'>/</p>
            <input name='toughness' type='text' placeholder='Toughness' value={this.state.toughness} onChange = {this.handleChange} />
          </div>
          <div>
            <p>Language</p>
            <input name='language' type='text' placeholder='Language' value={this.state.language} onChange = {this.handleChange} />
          </div>
          <div>
            <p>Order by</p>
            <input name='orderBy' type='text' placeholder='Order By' value={this.state.orderBy} onChange = {this.handleChange}/>
          </div>
          <div>
            <p>Id</p>
            <input name='id' type='text' placeholder='Unique ID' value={this.state.id} onChange = {this.handleChange} />
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
