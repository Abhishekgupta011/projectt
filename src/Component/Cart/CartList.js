import React from "react";
const CartList = (props) => {
    const formattedPrice = typeof props.price === 'number' ? `$${props.price.toFixed(2)}` : 'Invalid Price';
  return (
    <li className="cartItem">
      <div>
        <h3 className="name">{props.name}</h3>
        <div className="itemCount">
          <span className="price">{formattedPrice}</span>
          <span className="amount">x {props.amount}</span>
        </div>
      </div>
      <div className="buttons">
        <button onClick={props.onAdd} className="adds">+</button>
        <button onClick={props.onRemove} className="remove">-</button>
        <button onClick={props.onDelete} className="delete">Delete</button>
      </div>
      
    </li>
  );
};

export default CartList;
