import { useState, useEffect } from 'react';
import React from 'react';
import productos from '../mocks/Products';
import Loader from './Loader';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getDoc, doc, collection, getFirestore } from 'firebase/firestore';





const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();


    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", "Frb8v20ABDQJSSE1q0D1");

     getDoc(itemRef).then((snapshot) => {
       if (snapshot.exists()) {
        //console.log(snapshot.data())
        console.log([{ id: "Frb8v20ABDQJSSE1q0D1", ...snapshot.data() }]);
       }
     });
     //seba78it
/*         const productsCollection = collection(db, "productos");
        getDocs(productsCollection).then((snapshot) => {
            const products = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
        
            setProducts(products);
        }); */

    }, []);

/*         const itemRef = doc (db, "productos", "1H75LNOAzyZkacAV0L7N");
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()){
                setProducts ([{ id: "1H75LNOAzyZkacAV0L7N", ...snapshot.data() }]);
            }
        }); */


   

/*     useEffect(() => {
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
*/

if (products.length === 0) {
    return <Loader />;
  }

  return (
    <div className="itemListContainer">
      {<ItemList products={products} />}
    </div>
/*     return (
        <div className="itemListContainer">
            {loading ? (<Loader />) : (<ItemList products={products} />)}
        </div> */
    ); 
}

export default ItemListContainer;


