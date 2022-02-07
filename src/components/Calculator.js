import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="span-four">0</div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="orange">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="orange">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="orange">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="orange">+</button>
        <button type="button" className="span-two">0</button>
        <button type="button">.</button>
        <button type="button" className="orange">=</button>
      </div>
    );
  }
}

export default Calculator;
