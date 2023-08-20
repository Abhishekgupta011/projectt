import React, { useRef, useState } from "react";
const AddForm=(props)=>{
   const [amountIsValid , setAmountIsValid] = useState(true)
   const amountInputRef = useRef()
    const submitHandler =(event) =>{
      event.preventDefault();

      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;
      if(enteredAmount.trim().length===0 || enteredAmountNumber < 1 || enteredAmountNumber >5)
      {
         setAmountIsValid(false)
         setTimeout(()=>{
            setAmountIsValid(true)
         },3000)
         return
      }
      props.onAddToCart(enteredAmountNumber)
    }
   return(
    <div className="amount-container">
      <div className="label" >
         <label>Add quantity</label>
         <input type="number" min={1} max={5} step={1} ref={amountInputRef}/><br/>
      </div>
         <button className="add" onClick={submitHandler}> Add</button>
         {!amountIsValid && <p>Please enter a valid amount number (1-5).</p>}
    </div>
   )
}
export default AddForm;