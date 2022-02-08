import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    if (value.total != null) {
      this.setState({ total: value.total });
    }

    this.setState({ next: value.next });

    if (value.operation != null) {
      this.setState({ operation: value.operation });
    }
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calc-container">
        <div className="span-four">
          { total }
          { operation }
          { next }
        </div>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, 'AC')); }}>AC</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '+/-')); }}>+/-</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '%')); }}>%</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '÷')); }} className="orange">÷</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '7')); }}>7</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '8')); }}>8</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '9')); }}>9</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, 'x')); }} className="orange">x</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '4')); }}>4</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '5')); }}>5</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '6')); }}>6</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '-')); }} className="orange">-</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '1')); }}>1</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '2')); }}>2</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '3')); }}>3</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '+')); }} className="orange">+</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '0')); }} className="span-two">0</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '.')); }}>.</button>
        <button type="button" onClick={() => { this.handleClick(calculate(this.state, '=')); }} className="orange">=</button>
      </div>
    );
  }
}

export default Calculator;
