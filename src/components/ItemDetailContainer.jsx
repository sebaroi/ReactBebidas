
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'; 
import ItemDetail from './ItemDetail';
import productos from './mocks/Products';


const ItemDetailContainer = ({products}) => {
  const [item, setItem]= useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  useEffect(() => {
    let details = new Promise((resolve) =>
      setTimeout(() => resolve(productos[products - 1]), 2000)
    );

    details.then((data) => setItem(data)).then((data) => setHasProduct(!data));
  }, [products]);

  
  return (
    <div className="itemDetailContainer">
      {!hasProduct ? <Loader /> : <ItemDetail item= { item } />}
    </div>
  );
};

export default ItemDetailContainer;