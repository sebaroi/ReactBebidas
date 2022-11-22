import { useState } from 'react';
import React from 'react';
import productos from './mocks/Products';
import Loader from './Loader';
import ItemList from './ItemList';



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [hasProduct, setHasProduct] = useState(false);

    const listproduct = new Promise((resolve) => setTimeout(() => { 
        resolve(productos); }, 2000));

listproduct
.then((data) => setProducts(data))
.then((data) => setHasProduct(!data));

    return (
        <div className="itemListContainer">
        {!hasProduct ? ( <Loader/> ) : ( <ItemList products={products}/>)}
        </div>  
    );
}

export default ItemListContainer;