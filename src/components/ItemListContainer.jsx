import { useState } from 'react';
import React from 'react';
import productos from '../mocks/Products';
import Loader from './Loader';
import ItemList from './ItemList';
import { useParams} from 'react-router-dom';



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [hasProduct, setHasProduct] = useState(false);
    const {category} = useParams();

    if (!category) {
        const listproduct = new Promise((resolve) => setTimeout(() => { 
            resolve(productos); }, 2000));
    
        listproduct
            .then((data) => setProducts(data))
            .then((data) => setHasProduct(!data));
    } else {
        const listproduct = new Promise((resolve) => setTimeout(() => { 
            resolve(productos); }, 2000));
            listproduct.then((data) =>
                setProducts(data.filter((product) => product.category === category))
            );
    }

    return (
        <div className="itemListContainer">
        {!hasProduct ? ( <Loader/> ) : ( <ItemList products={products}/>)}
        </div>  
    );
}

export default ItemListContainer;



/* import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { productos } from "../mocks/Products";

const ItemListContainer = () => {
const { category } = useParams();
const [products, setProducts] = useState([]);

useEffect(() => {
    new Promise((resolve) =>
    setTimeout(() => {
        resolve(productos);
    }, 2000)
    ).then((data) => {
    if (category) {
        const categories = data.filter(
        (product) => product.category === category
        );
        setProducts(categories);
    } else {
        setProducts(data);
    }
    });
}, [category]);

if (products.length === 0) {
    return <p>Loading...</p>
}

return (
    <div className="h-full">
    <ItemList products={products} />
    </div>
);
};

export default ItemListContainer; */

