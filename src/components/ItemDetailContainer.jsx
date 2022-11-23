/* import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import PRODUCTOS from "../mocks/products";

const ItemDetailContainer = ({ product }) => {
  const [item, setItem] = useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  useEffect(() => {
    let details = new Promise((resolve) =>
      setTimeout(() => resolve(PRODUCTOS[product - 1]), 2000)
    );

    details.then((data) => setItem(data)).then((data) => setHasProduct(!data));
  }, [product]);

  return (
    <div className="itemDetailContainer">
      {!hasProduct ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer; */

/* import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { item as itemMock } from "../mocks/item.mock";

const ItemDetailContainer = () => {
const [item, setItem] = useState(null);

useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemMock[0]), 2000)).then(
    (data) => setItem(data)
    );
}, []);

if (!item) {
    return <p>Loading...</p>
}

return <ItemDetail item={item} />;
};

export default ItemDetailContainer; */



import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import productos from "../mocks/Products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [hasProduct, setHasProduct] = useState(true);
  const {id}= useParams()

  useEffect(() => {
    let details = new Promise((resolve) =>
      setTimeout(() => resolve(productos))
    );

    details
    .then((data) => setItem(data.find((prod)=> prod.id === id)))
    .finally(()=> setHasProduct(false))
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {hasProduct ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;