import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';
import { CartContextProvider } from "./context/cartContext";

//------------FIREBASE----------------------//

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

/* const firebaseConfig = {
  apiKey: "AIzaSyDY6aiouWHTJ6jSbfK89JVJ_M1jnLd6YhE",
  authDomain: "coderreact-5e975.firebaseapp.com",
  projectId: "coderreact-5e975",
  storageBucket: "coderreact-5e975.appspot.com",
  messagingSenderId: "1000962534047",
  appId: "1:1000962534047:web:92a9ac8655e3d1ac0590aa"
}; */

const firebaseConfig = {
  apiKey: "AIzaSyDY6aiouWHTJ6jSbfK89JVJ_M1jnLd6YhE",
  authDomain: "coderreact-5e975.firebaseapp.com",
  projectId: "coderreact-5e975",
  storageBucket: "coderreact-5e975.appspot.com",
  messagingSenderId: "1000962534047",
  appId: "1:1000962534047:web:92a9ac8655e3d1ac0590aa"
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

