import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/cartContext";
import Button from 'react-bootstrap/Button';
import swal from "sweetalert";
import '../components/styles/carrito.css';

// firebase
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";

const CheckoutView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;
    const direccion = event.target[3].value;

    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const order = {
      buyer: { name, phone, email, direccion },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
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
            swal("COMPRA FINALIZADA, PRONTO TE LLEGARE UN EMAIL, HASTA LA PROXIMA!!!");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
  }, [updatingProducts]);

  return (
    <Layout>
      <div className="conteiner marcoFinalCompra">
      <form onSubmit={handleFinalizePurchase}>
        <div className="formCompra2 ">
          <div>
          <p><strong>COMPLETA LOS DATOS PARA FINALIZAR LA COMPRA</strong></p>
          </div>
          <input
            className="textFormulario h-8 pl-4 mb-4 rounded-md"
            placeholder="Nombre Completo"
            required
          />
          <input
            className="textFormulario h-8 pl-4 mb-4 rounded-md"
            placeholder="Numero de Telefono"
            type="number"
            required
          />
          <input
            className="textFormulario h-8 pl-4 mb-4 rounded-md"
            placeholder="Email"
            type="email"
            required
          />
            <input
            className="textFormulario h-8 pl-4 mb-4 rounded-md"
            placeholder="Direccion"
            type={"Direccion"}
            required
          />
        </div>
        <div className='col-md-2'></div>
        <div>
          Total a pagar: <strong>${totalAmount}</strong>
        </div>
        <Button
          type="submit"
          className="rounded-lg p-2 bg-gray-800 text-white disabled:opacity-50"
          disabled={isLoading}
        >
          Finalizar
        </Button>
      </form>
      </div>
    </Layout>
  );
};

export default CheckoutView;
