import './Calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (event) => {
    const value = calculate({ total, operation, next }, event.target.innerText);

    if (value.total != null) {
      setTotal(value.total);
    }
    setNext(value.next);

    if (value.operation != null) {
      setOperation(value.operation);
    }
  };

  return (
    <div className="container flex align-start">
      <div className="calc-title">
        <h1>Let&apos;s do some math!</h1>
      </div>
      <div className="calc-container">
        <div className="span-four">
          { total }
          { operation }
          { next }
        </div>
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
        <button type="button" onClick={handleClick} className="orange">÷</button>
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button type="button" onClick={handleClick} className="orange">x</button>
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button type="button" onClick={handleClick} className="orange">-</button>
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>
        <button type="button" onClick={handleClick} className="orange">+</button>
        <button type="button" onClick={handleClick} className="span-two">0</button>
        <button type="button" onClick={handleClick}>.</button>
        <button type="button" onClick={handleClick} className="orange">=</button>
      </div>
    </div>
  );
};

export default Calculator;
