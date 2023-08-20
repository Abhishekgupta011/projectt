
import { useState } from 'react';
import './App.css';
import AddItems from './Component/Layout/AddItems';
import AddList from './Component/Layout/AddList';
import CartProvider from './Component/Context/CartProvider';
import Cart from './Component/Cart/Cart';

function App() {
  const [ListItems, setListItem] = useState([]);
  const  [cartVisible, setCartVisible] = useState(false)

  const showCart = () =>{
    setCartVisible(true)
  }

  const HideCart = () => {
    setCartVisible(false)
  }


  // Function to add a new product to the list
  const addProductToList = (newProduct) => {
    setListItem([...ListItems, newProduct]);
  };
  return (
    <CartProvider>
      <AddItems onShowCart={showCart} addProductToList={addProductToList} />
      <AddList ListItems={ListItems}/>
      {cartVisible && <Cart onClose = {HideCart}/>}
    </CartProvider>
  );
}

export default App;
