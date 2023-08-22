import React, { useRef } from "react";

const AddForm = (props) => {
  const amountInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount > 0 && enteredAmount <= 10) {
      props.addToCart(enteredAmount);
    } else {
      alert("Please enter a valid quantity between 1 and 10");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="quantity">Add Quantity</label>
      <input
        type="number"
        min={1}
        max={10}
        id="quantity"
        step={1}
        ref={amountInputRef}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddForm;
