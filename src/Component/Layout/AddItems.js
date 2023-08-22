import React, { useState } from "react";
import CartButton from "./CartButton";
import { v4 as uuidv4 } from 'uuid';

const AddItems = (props) =>{
    const [medicine , setMedicine] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState('')
    const nameHandler = (event)=>{
        setMedicine(event.target.value);
    }
    const descriptionHandler = (event)=>{
        setDescription(event.target.value);
    }
    const priceHandler = (event)=>{
        setPrice(event.target.value);
    }
    const addProductHandler = () => {
        // Create a new product object
        const newProduct = {
          id : uuidv4(),
          name: medicine,
          description: description,
          price: parseFloat(price),
        };
    
        // Call the function from props to add the new product
        props.addProductToList(newProduct);
    
        // Clear the input fields
        setMedicine("");
        setDescription("");
        setPrice("");
      };
    return(
        <div>
            <label htmlFor="medicine">Medicine</label>
            <input 
                type="text" 
                id="medicine" 
                onChange={nameHandler}
                value={medicine}
                />
            <label htmlFor="description">Description</label>
            <input 
                type="text" 
                id="description" 
                onChange={descriptionHandler}
                value={description}
                />
            <label htmlFor="price">Price</label>
            <input 
                type="number" 
                id="price" 
                onChange={priceHandler}
                value={price}
                />
            <button onClick={addProductHandler}>Add Product</button>
            <CartButton onClick={props.onShowCart}/>
        </div>
    )
}
export default AddItems;