import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/item.css';
import ItemCount from './ItemCount';

/* function Item (props) { */
const Item = ({ product }) => {
/* console.log(props) */

  return (

    <Card className='cardProducto'  style={{ width: '18rem' }}>
      <div className='contenedorImagenCards'> 
        <Card.Img variant="top" src={product.imageProd} />
      </div>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button className='descripcion' variant="primary">DESCRIPCION</Button> 
        {product.price}
        <div>        <ItemCount/></div>
 
      </Card.Body>
    </Card>

  );
}

export default Item;