import React, { Component } from 'react';
import '../App.css';

class PowerTough extends Component {
    render() {
        if (this.props.power) {
            return (
                <div className='power-toughness'>
                    {this.props.power} / {this.props.toughness}
                </div>
            );
        }
        return null;
    }
  }

  export default PowerTough;