import React, { useState } from 'react'
import './calculator.scss'
const Calculator = () => {
    const [query, setQuery] = useState('00')
    const [result, setResult] = useState('null')
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
            <button className='primary-button'>AC</button>
            <button className='primary-button'>DEL</button>
            <button className='primary-button'>%</button>
            <button className='primary-button'>/</button>
            <button className='secondary-button'>1</button>
            <button className='secondary-button'>2</button>
            <button className='secondary-button'>3</button>
            <button className='primary-button'>x</button>
            <button className='secondary-button'>4</button>
            <button className='secondary-button'>5</button>
            <button className='secondary-button'>6</button>
            <button className='primary-button'>+</button>
            <button className='secondary-button'>7</button>
            <button className='secondary-button'>8</button>
            <button className='secondary-button'>9</button>
            <button className='primary-button'>-</button>
            <button className='secondary-button'>00</button>
            <button className='secondary-button'>0</button>
            <button className='secondary-button'>.</button>
            <button className='main-button'>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
