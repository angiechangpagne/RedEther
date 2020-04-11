import React from 'react';
import './styles.scss';
//use for the login re identification scheme, and for isolating a subgraph in motion
//to perform an action
//display hash id
export const SmartContract = (props) => {
  


  return (
    <div class="smartContract">
      <h2> Smart Contract</h2>
      <div>{props}</div>
      <a href="#">
        <span> </span>
        <span> </span>
        <span> Smart Contract </span>
        <span></span>
      </a>
    </div>
  ) 
}

export default SmartContract;

