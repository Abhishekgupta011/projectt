import React, { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";

const CartButton = (props) => {
  const crtContext = useContext(CartContext);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);

  useEffect(() => {
    // Calculate the total number of items in the cart whenever the cart items change
    const totalItems = crtContext.items.reduce((current, item) => {
      return current + item.amount;
    }, 0);

    setNumberOfCartItems(totalItems);
  }, [crtContext.items]);

  return (
    <div>
      <button onClick={props.onClick} >
        Add Cart
        <span className="badge">{numberOfCartItems}</span>
      </button>
    </div>
  );
}

export default CartButton;
