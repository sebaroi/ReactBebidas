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
        if (!category) {
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
    }, [category]); 

    return (
        <div className="itemListContainer">
            {loading ? (<Loader />) : (<ItemList products={products} />)}
        </div>
    );
}

export default ItemListContainer;


