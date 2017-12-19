import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
    render() {
      return (
        <div className='card'>
            <div className='title-bar'>
                <p>{this.props.card.name}</p>
                <p>{this.props.card.manaCost}</p>
            </div>
            <div className='type-bar'>
                <p>{this.props.card.type}</p>
            </div>
            <div>
                <p>{this.props.card.text}</p>
            </div>
            <div className='power-toughness'>
                <p>{this.props.card.power} / {this.props.card.toughness}</p>
            </div>
        </div>
      );
    }
  }

  export default Card;