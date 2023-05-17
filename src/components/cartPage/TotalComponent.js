import React from 'react';
import './TotalComponent.css'

function TotalComponent(props) {
  return (
    <div className='total-comp'><h3>Sub Total :  {props.cart} Rs</h3></div>
  )
}

export default TotalComponent