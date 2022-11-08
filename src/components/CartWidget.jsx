import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './styles/carrito.css';


const CartWidget = () => {
    return (
        <div>

            <Button variant="primary" className='carrito'>
            <FontAwesomeIcon icon={faCartShopping} />    
            </Button>{' '} 
        </div>
    );
}

export default CartWidget;
