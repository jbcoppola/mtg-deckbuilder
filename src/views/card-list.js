import React, { Component } from 'react';
import Card from './card';
import '../App.css';

class CardList extends Component {
    render() {
      return (
        <div>
            <div className="results-heading">
              <h3 className="panel-title">Matching Cards</h3>
            </div>
            <div className="results-body">
              { this.props.cardList.map((card) => <Card name={card.name} text={card.text} key={card.id} /> )}
            </div>
          </div>
      );
    }
  }

  export default CardList;