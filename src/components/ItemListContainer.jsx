import React from 'react';
import NavBar from './NatBar';
import productos from './Products';
import Loader from './Loader';
import ItemList from './ItemList';
import { useState } from 'react';



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [hasProduct, setHasProduct] = useState(false);
    const listproduct = new Promise((resolve) => setTimeout(() => { 
        resolve(productos); }, 3000)
  );

  listproduct
  .then((data) => setProducts(data))
  .then((data) => setHasProduct(!data));
   

    return (
        <div className="itemListContainer">
        <div>
            <NavBar greeting={"Bienvenidos"}/>
        </div>
        {!hasProduct ? ( <Loader/> ) : ( <ItemList products={products}/>
          )}
        </div>  
    );
}

export default ItemListContainer;