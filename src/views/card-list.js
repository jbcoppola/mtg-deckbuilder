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
            <div className="card-list">
              { this.props.cardList.map((card) => <Card card={card}/> )}
            </div>
          </div>
      );
    }
  }

  export default CardList;