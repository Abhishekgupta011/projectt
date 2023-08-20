import React, { useContext } from "react";
import AddForm from "./AddForm";
import ListItem from "./ListItems";
import CartContext from "../Context/CartContext";

const AddList = ({ListItems , price}) =>{
    const cartCtx = useContext(CartContext)
    const formattedPrice = typeof price === 'number' ? `$${price.toFixed(2)}` : 'Invalid Price';
    const onAddToCartHandler = item =>{
        cartCtx.addItem({
            name: item.name,
            amount: 1,
            price: item.price,
        }
        )

    }
    const list = [...ListItem,...ListItems].map((item,index)=>(
        <li key={index}>
            <span>{item.name}</span>
            <span>{item.description}</span>
            <span>${formattedPrice}</span>
            <AddForm onAddToCart={onAddToCartHandler}/>
        </li>
    ))
    return(
        <div>
            <ol>
             {list}
            </ol>
        </div>
    )
}
export default AddList;