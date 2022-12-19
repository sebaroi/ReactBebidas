import { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/cartContext";

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <Button
      onClick={() => removeItem(itemId)}
      className="absolute flex justify-center items-center -top-2 -right-2 w-8 h-8 bg-red-200 rounded-full"
    >
        borrar
    </Button>
  );
};
