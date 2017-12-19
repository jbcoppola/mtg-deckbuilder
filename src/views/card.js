import React, { Component } from 'react';
import '../App.css';
import PowerTough from './power-toughness';

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <div>
                    <div className='title-bar'>
                        <p>{this.props.card.name}</p>
                        <p>{this.props.card.manaCost}</p>
                    </div>
                </div>
                <div>
                    <div className='type-bar'>
                        <p>{this.props.card.type}</p>
                    </div>
                    <div>
                        <p>{this.props.card.text}</p>
                    </div>
                    <PowerTough power={this.props.card.power} toughness={this.props.card.toughness} />
                </div>
            </div>
        );
    }
}

export default Card;