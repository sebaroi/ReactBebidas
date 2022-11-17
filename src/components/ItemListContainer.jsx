import React from 'react';
import NavBar from './NatBar';
import productos from './Products';





const ItemListContainer = () => {

    const productList = new Promise((resolve) => setTimeout(() => {resolve(productos);}, 3000));

    productList.then((data) => console.log({data}));

    return (
        <div>
            <NavBar greeting={"Bienvenidos"}/>
        </div>
    );
}

export default ItemListContainer;