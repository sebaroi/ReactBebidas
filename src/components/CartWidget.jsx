import React from 'react';
import { button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import carrito from './styles/carrito.css';


const CartWidget = () => {
    return (
        <div>

            <button className="carrito btn btn-secondary my-2 my-sm-0" type="submit">
            <FontAwesomeIcon icon={faCartShopping} />

                 
            </button>
        </div>
    );
}

export default CartWidget;
