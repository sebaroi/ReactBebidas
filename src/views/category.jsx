/* import React from 'react';
import {Layout} from '../Layout';
import { useParams } from 'react-router-dom';
import productos from '../mocks/Products';
import Item from '../Item';

const CategoryView = () => {
    const { category } = useParams();
    const categoria = productos.filter((product) => product.category === category);


    return (
        <div>
            <Layout>
            <div className="cardProduct_conten">
                {categoria.map((product) => (
                    <Item product={product} />
                ))}
            </div>
            </Layout>
        </div>
    );
}

export default CategoryView;
 */


//import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { Layout } from "../components/Layout";


const CategoryView = () => {
//const { category } = useParams();
  // const categories = item.filter((product) => product.category === category);
//

return (
    <Layout>
        <ItemListContainer />
    </Layout>
);
};

export default CategoryView;