import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import './styles/itemDetail.css';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else setCurrentStock(currentStock - count);
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div className="conteiner ">
      {/* Item image */}
      <div className="flex justify-center w-1/2">
        <img className="ContenedorFoto max-h-[500px]" src={item.imageProd} alt={item.name} />
      </div>

      {/* Item description */}
      <div className="interno flex flex-col justify-center pl-10">
        <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
        <p className="mt-4 text-xl">{item.description}</p>
        <span className="mt-4 text-xl">
          Price: <strong className="text-gray-800">${item.price}</strong>
        </span>
        {currentStock > 0 && (
          <p className="text-sm">In Stock: {currentStock}</p>
        )}

        <div className=" contador flex flex-col flex-1 items-center">
          {/* Count */}
          {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
          ) : (
            <span className="text-red-500 mt-10">Sin stock</span>
          )}
          <div className="botonesInferiores w-full flex flex-col items-center">
            <Button
              onClick={handleAdd}
              className="w-4/5 bg-gray-200 px-4 py-2 mt-2 rounded disabled:opacity-40 botonInf"
              disabled={currentStock === 0}
            >
              Agregar al carrito
            </Button>
            <Button
              onClick={handleCheckout}
              className="w-4/5 bg-gray-800 text-white px-4 py-2 mt-2 rounded"
            >
              Finalizar Compra
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;



/* import React from 'react';

const ItemDetail = ({item}) => {
    return (
        <div>
            <div>
                <h2>Detalle del producto:{item.name}</h2>
            </div>
        </div>
    );
}

export default ItemDetail;



 */

