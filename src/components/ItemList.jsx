import Item from "./Item";
import './styles/item.css';

const ItemList = ({products}) => {
  return (
    <ul className="cardProduct_conten " >
      {products.map((product ) =>(  
        <Item product={product} />
        /* return( */
        
     /*    <Item key = {product.id} {...product} />) */
      ))}
    </ul>
  );
};

export default ItemList;
