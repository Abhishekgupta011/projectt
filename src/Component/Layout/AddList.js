import React, { useContext } from "react";
import AddForm from "./AddForm";
import ListItem from "./ListItems";
import CartContext from "../Context/CartContext";

const AddList = (props) => {
  const crtContext = useContext(CartContext);
  
  const addItemHandler = (amount,name,price,id) => {
    crtContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
    console.log(props.name)
}


  const list = [...ListItem , ...props.ListItems].map((item) => (
    <li key={item.id}>
      <span>{item.name}</span><br/>
      <span>{item.description}</span><br/>
      <span>${item.price.toFixed(2)}</span><br/>
      <AddForm key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        addToCart={(amount) => addItemHandler(amount, item.name, item.price,item.id)}
        />
    </li>
  ));

  return (
    <div>
      <ol>
        {list}
      </ol>
    </div>
  );
}

export default AddList;
