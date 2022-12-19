import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../imagenes/carritoVacio.jpeg";
import Item from "../components/Item";
import { Layout } from "../components/Layout";
import Loader from "../components/Loader";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import '../components/styles/carrito.css';
import Button from 'react-bootstrap/Button';
/* import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"; */
import swal from "sweetalert";



const CartView = () => {
/*   const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false); */
  const navigate = useNavigate();

  const { productsAdded: items, totalAmount } = useContext(CartContext);

/*   const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  }; */


  const goToCheckout = () => {
    navigate("/checkout");
  };


/*     const handleFinalizePurchase = () => {
    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue); */

/*     const order = {
      buyer: { name: "Jorge", phone: "123", email: "a@asas.com" },
      items,
      total,
    }; */

/*     const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  }; */

/*   useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            setIsLoading(false);
            swal("Compra finalizada, Pronto le estara llegnado un E-mail");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatingProducts]);
 */
  return (
    <Layout>
      <div className="contenedorCarritoVacio">
        {items.length === 0 ? (
          <div className="fotoCarrito">
            <img src={EmptyCart} alt="Empty Cart" className="foto" />
            <h1 className="textoCarritoVacio">No has agregado productos</h1>
            <Button className="haceTuCompra" onClick={() => navigate("/")} >
              HACE TU COMPRA
            </Button>
          </div>

        ) : (
          <div>
            <div className=" productosCarrito flex gap-4" >
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (

         <div className="description">
          <p className=" carroDescripcion"> { quantityAdded } </p>
          <p className="carroDescripcion"> { product.item.name } </p>
          
          <p className="carroDescripcion">Price: <strong>${ product.item.price }</strong> </p> 
          <TrashWidget itemId={product.item.id} />
        </div> 
                  
                );
              })}
            </div>
            <div className="flex justify-end mt-4">
      {/*         {isLoading ? (
                <Loader size="50px" />
              ) : ( */}
                <div className="flex flex-col">
                  <span>Total a pagar: ${totalAmount}</span>
                  <Button
                    onClick={goToCheckout}
                    className="rounded-lg p-2 bg-gray-800 text-white"
                  >
                    Finalizar Compra
                  </Button>
                  <Button onClick={() => navigate("/")}
                    className="rounded-lg p-2 bg-gray-800 text-white"
                  >
                    Seguir comprando
                  </Button>
                </div>
          {/*     )} */}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;
