import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles/item.css';
import {Link} from 'react-router-dom'


const Item = ({ product, quantityAdded }) => {


  return (
    <Link className='link' to={`/item/${product.id}`}>
      <div className='conteiner '>
        <div class="row ">
          <div className='col-md-8 '>
            <Card className='cardProducto'  >
          <div className='contenedorImagenCards'> 
            <Card.Img className='imgcard' variant="top" src={product.imageProd} />
          </div>
          <Card.Body>
            <Card.Text className='precio'> 
              ${product.price}- 
            </Card.Text>
            <Card.Title className='titulo'>{product.name}</Card.Title>
            <div className='stock'>
            <span 
            className={product.stock === 0 ? "text-xs text-red-500" : "text-xs"}
          >
            {product.stock === 0
              ? "Sin Stock"
              : quantityAdded
              ? `Agregados: ${quantityAdded}`
              : `Stock: ${product.stock}`}
          </span>
          </div>
          </Card.Body>
          </Card>
        </div>

        <div className='col-md-2'></div>
      </div>
    </div>
    </Link>
  );
}

export default Item;



