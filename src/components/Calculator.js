import './Calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (value) => {
    if (value.total != null) {
      setTotal(value.total);
    }
    setNext(value.next);

    if (value.operation != null) {
      setOperation(value.operation);
    }
  };

  const obj = { total, operation, next };
  return (
    <div className="calc-container">
      <div className="span-four">
        { total }
        { operation }
        { next }
      </div>
      <button type="button" onClick={() => { handleClick(calculate(obj, '+/-')); }}>+/-</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, 'AC')); }}>AC</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '%')); }}>%</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '÷')); }} className="orange">÷</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '7')); }}>7</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '8')); }}>8</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '9')); }}>9</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, 'x')); }} className="orange">x</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '4')); }}>4</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '5')); }}>5</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '6')); }}>6</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '-')); }} className="orange">-</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '1')); }}>1</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '2')); }}>2</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '3')); }}>3</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '+')); }} className="orange">+</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '0')); }} className="span-two">0</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '.')); }}>.</button>
      <button type="button" onClick={() => { handleClick(calculate(obj, '=')); }} className="orange">=</button>
    </div>
  );
};

export default Calculator;
