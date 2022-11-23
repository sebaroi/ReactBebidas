import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Category from '../views/category';
import Promociones from '../views/promociones';
import Item from '../views/item';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,  
    },
    {
        path: "/category/:category",
        element: <Category />,  
    },
    {
        path: "/Promociones/:id",
        element: <Promociones />,
    },
    {
        path: "/item/:id",
        element: <Item />,
    }


])


/* import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Category from '../views/category';
import Promociones from '../views/promociones';
import Item from '../components/Item';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,  
    },
    {
        path: "/category/:category",
        element: <Category />,  
    },
    {
        path: "/Promociones/:id",
        element: <Promociones />,
    },
    {
        path: "/item/:id",
        element: <Item />,
    }


]) */