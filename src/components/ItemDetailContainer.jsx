import { useGetItem } from "../hooks/useGetItem";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";


const ItemDetailContainer = () => {
  const item = useGetItem();

  if (!item) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center items-center ">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;

