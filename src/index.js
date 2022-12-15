import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';
import { CartContextProvider } from "./context/cartContext";

//------------FIREBASE----------------------//
import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyCE4vAzyHqTVhCTM059ZCaj63yxfDZM2L0",
  authDomain: "coder-ecommerce-bebidas.firebaseapp.com",
  projectId: "coder-ecommerce-bebidas",
  storageBucket: "coder-ecommerce-bebidas.appspot.com",
  messagingSenderId: "851654385281",
  appId: "1:851654385281:web:56e8338b4bb55888f03780"
};

initializeApp(firebaseConfig);

//---------fIN---FIREBASE----------------------//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router= { router }/>
    </CartContextProvider>
  </React.StrictMode>
);

