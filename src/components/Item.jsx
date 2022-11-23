import React from 'react';

const ItemDetail = ({item}) => {
    return (
        <div>
            <section className="cardProduct datails">
        <div className="productItem">
          <h2 className="title">{item.title}</h2>
          <p className="category">{item.category}</p>
        </div>
        <div className="productItem">
          <h2 className="infoTitle">Descripción</h2>
          <p className="infoText">{item.description}</p>
        </div>
        <div className="productItem">
          <div className="colors_size">
            <div className="colors">
              <h2>Color</h2>

            </div>

          </div>
        </div>
        <div className="productItem">
          <div className="card_price">
            {/* <CantCart /> */}
            <div className="price-conten">
              <p>$</p>
              <p className="price">{`${item.price}`}</p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default ItemDetail;




/* import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/item.css';
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'

/* function Item (props) { */
/* const Item = ({ product }) => { */
/* console.log(props) */

/*   return (
    <div className='conteiner '>
      <div class="row g-3 w-100">
<div className='col-lg-3 col-md-4 col-sm-6'>
    <Card className='cardProducto'  >
      <div className='contenedorImagenCards'> 
        <Card.Img className='imgcard' variant="top" src={product.imageProd} />
      </div>
      <Card.Body>
      <Card.Text className='precio'> 
          ${product.price}- 
        </Card.Text>
        <Card.Title className='titulo'>{product.name}</Card.Title>
 */
  
        
       {/*  <div>        <ItemCount/></div> ESTO LO VOY A USAR EN LA DFESCRIPPCION */}
 
 /*      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}

export default Item; */ 