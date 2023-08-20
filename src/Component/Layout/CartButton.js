import React, { useContext } from "react";
import CartContext from "../Context/CartContext";

const CartButton = (props) =>{
    const cartctx = useContext(CartContext)

   const numberOfItemsInCart = cartctx.items.reduce((current , items) => {
    return current + items.amount;
   } , 0)
    return(
        <div>
            <button onClick={props.onClick}>Add Cart
            <span className="badge">{numberOfItemsInCart}</span>
            </button>
        </div>
    )
}

export default CartButton;