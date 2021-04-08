import React from 'react';
import './Counter.css';


const Counter = (props) => (
  <div className='content-wrapper'>
    <h2>{props.valueOfCounter}</h2>
  </div>
)

export default Counter;
