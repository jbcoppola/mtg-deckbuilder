import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
        <form className="Search-form">
          <div>
            <p>Name</p>
            <input name='name' type='text' placeholder='Name' /></div>
          <div>
            <p>Layout</p>
            <input name='layout' type='text' placeholder='Layout' /></div>
          <div>
            <p>Converted mana cost</p>
            <input name='cmc' type='text' placeholder='CMC' /></div>
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
            <input name='rarity' type='text' placeholder='Rarity'></input>
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
            <p>Results to display (max/default 100)</p>
            <input name='pageSize' type='text' placeholder='Results size' />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
