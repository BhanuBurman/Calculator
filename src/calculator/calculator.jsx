import React, { useState } from 'react'
import './calculator.scss'
const Calculator = () => {
    const [query, setQuery] = useState('00')
    const [result, setResult] = useState('null')
    const calculate = (e) => {
      // console.log(e);
      const value = e.target.innerText;
       if(value== 'AC'){
           setQuery('00')
           setResult('null')
       }else if(value === 'DEL'){
           setQuery(query.slice(0, -1))
       }else if(value === '='){
           setResult(eval(query))
       }else{
           if(query === '00'){
               setQuery(value)
           }else{
               setQuery(query + value)
           }
       }
    }
  return (
    <div className='container'>
        <div className="overlay"></div>
      <div className="calcCard">
        <div className="display">
            <div className="query">{query}</div>
            {result !== 'null'&& (
                <div className="result">{result}</div>
            )}
        </div>
        <div className="buttons-grid">
            <button className='primary-button'  onClick={calculate}>AC</button>
            <button className='primary-button' onClick={calculate}>DEL</button>
            <button className='primary-button' onClick={calculate}>%</button>
            <button className='primary-button' onClick={calculate}>/</button>
            <button className='secondary-button' onClick={calculate}>1</button>
            <button className='secondary-button' onClick={calculate}>2</button>
            <button className='secondary-button' onClick={calculate}>3</button>
            <button className='primary-button' onClick={calculate}>*</button>
            <button className='secondary-button' onClick={calculate}>4</button>
            <button className='secondary-button' onClick={calculate}>5</button>
            <button className='secondary-button' onClick={calculate}>6</button>
            <button className='primary-button' onClick={calculate}>+</button>
            <button className='secondary-button' onClick={calculate}>7</button>
            <button className='secondary-button' onClick={calculate}>8</button>
            <button className='secondary-button' onClick={calculate}>9</button>
            <button className='primary-button' onClick={calculate}>-</button>
            <button className='secondary-button' onClick={calculate}>00</button>
            <button className='secondary-button' onClick={calculate}>0</button>
            <button className='secondary-button' onClick={calculate}>.</button>
            <button className='main-button' onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
