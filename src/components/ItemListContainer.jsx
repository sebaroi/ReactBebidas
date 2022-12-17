import { useGetItem } from "../hooks/useGetItem";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
    const items = useGetItem();

if (!items) {
    return <Loader />;
}

return (
    <div className="itemListContainer">
        <ItemList products={items} />
    </div>
    );
};

export default ItemListContainer;
