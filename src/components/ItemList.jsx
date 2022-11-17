import Item from "./Item";
const ItemList = ({products}) => {
  return (
    <ul className="cardProduct_conten" >
      {products.map((product ) =>{  
        return(
        
        <Item key = {product.id} {...product} />)
      })}
    </ul>
  );
};

export default ItemList;
