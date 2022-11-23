import { useState, useEffect } from 'react';
import React from 'react';
import productos from '../mocks/Products';
import Loader from './Loader';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
 
 
 
const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
 
    useEffect(() => {
        new Promise((resolve) => setTimeout(() => {
            resolve(productos);
        }, 2000)
        ) .then((data) => {
            if (category){
                const categories = data.filter (
                (product) => product.category === category);
            setProducts(categories);
            } else {
                setProducts(data);
            }
        });
    }, [category]);

/*         if (!category) {
            const listproduct = new Promise((resolve) => setTimeout(() => {
                resolve(productos);
            }, 2000));
 
            listproduct
                .then((data) => {
                    setProducts(data)
                    setLoading(false)
                })
        } else {
            const listproduct = new Promise((resolve) => setTimeout(() => {
                resolve(productos);
            }, 2000));
            listproduct.then((data) => {
 
                setProducts(data.filter((product) => product.category === category))
                setLoading(false)
            }
            );
        }
    }, [category]); */

    if (products.length === 0){
        return <Loader />
    }

    return (
        <div className="itemListContainer">
            {loading ? (<Loader />) : (<ItemList products={products} />)}
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

