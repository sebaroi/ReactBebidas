import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import './styles/carrito.css';


const CartWidget = () => {
    const { productsAdded } = useContext(CartContext);
    const count = productsAdded.length;

    return (
        <div>
            <Link to="/cart" className="relative">    
                <Button variant="primary" className='carrito'>
                    <FontAwesomeIcon className='carro' icon={faCartShopping} />    
                </Button>{' '} 
                {count > 0 && (
                <span className="absolute w-4 h-4 bottom-0 -right-2 rounded-full flex justify-center items-center bg-white/70">
                    {count}
                </span>
                )}
            </Link>    
        </div>
    );
}

export default CartWidget;
