import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
    render() {
      return (
        <div className='card'>
            <p>{this.props.name}</p>
            <p>{this.props.text}</p>
        </div>
      );
    }
  }

  export default Card;