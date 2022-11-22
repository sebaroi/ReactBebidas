import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Category from '../components/views/category';
import Promociones from '../components/views/promociones';


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


])