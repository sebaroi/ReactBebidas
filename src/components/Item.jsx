import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/body.css';


import ItemCount from './ItemCount';

function Item (props) {
console.log(props)

  return (

     
    <Card className='cardProducto'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imageProd} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        </Card.Text>
        <Button className='descripcion' variant="primary">DESCRIPCION</Button> 
        {props.price}
        <div>        <ItemCount/></div>
 
      </Card.Body>
    </Card>
  );
}

export default Item;