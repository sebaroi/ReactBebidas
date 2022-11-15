import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../components/styles/contador.css';

const ItemCount = () => {
  const [count, setAcount] = useState(0);
const stock = 5;
  const decrease = () => {
    setAcount(count-1);
  }

  const increase = () => {
    setAcount(count+1);
  }

  return (
    <div>
      <div className='contador'>
        <Button variant="primary">Agregar al carrito</Button>
        <Button variant="danger" disabled={count <=1} onClick={decrease}> - </Button>
        <span>{count} </span>
        <Button variant="danger" disabled={count >=stock} onClick={increase}> + </Button>
      </div>
    </div>
  );
}


export default ItemCount;
