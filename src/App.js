import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./components/Pages/ShopPage";
import AddToCartPage from "./components/Pages/AddToCartPage";
import Layout from "./components/Pages/Layout";
import { useEffect, useState } from "react";
import Checkout from "./components/cartPage/Checkout";
import Login from "./components/Pages/Login";
import SuccessModal from "./components/Modals/SuccessModal/SuccessModal";
// import Decimal from 'decimal.js';

function App() {
  // const [showWebsite, setShowWebsite] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState("0");
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    totalValue();
   
  }, [cart]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      // setShowWebsite(true);
    }
  }, []);
 

  const totalValue = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price * cart[i].quantity;
    }
    setCartTotal(totalVal);
  };

  const handleAddToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      const newItem = { ...item, quantity: 1, totalPrice: item.price };
      setCart([newItem, ...cart]);
    } else {
      const updatedCartItems = [...cart];
      const updatedItem = { ...updatedCartItems[itemIndex] };
      updatedItem.quantity += 1;
      updatedItem.totalPrice *= updatedItem.quantity;
      updatedCartItems[itemIndex] = updatedItem;
      setCart(updatedCartItems);
    }
    setCartQuantity((prevCount) => prevCount + 1);
  };
  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCartItems);
    setCartQuantity(
      updatedCartItems.reduce((acc, cur) => acc + cur.quantity, 0)
    );
  };

  const handleIncreaseQuantity = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    const updatedCartItems = [...cart];
    const updatedItem = { ...updatedCartItems[itemIndex] };
    updatedItem.quantity += 1;
    updatedItem.totalPrice = updatedItem.price * updatedItem.quantity;
    updatedCartItems[itemIndex] = updatedItem;
    setCart(updatedCartItems);
    setCartQuantity((prevCount) => prevCount + 1);
  };

  const handleReduceQuantity = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (cart[itemIndex].quantity === 1) {
      return;
    } else {
      const updatedCartItems = [...cart];
      const updatedItem = { ...updatedCartItems[itemIndex] };
      updatedItem.quantity -= 1;
      updatedItem.totalPrice = updatedItem.price * updatedItem.quantity;
      updatedCartItems[itemIndex] = updatedItem;
      setCart(updatedCartItems);
      totalValue();
      setCartQuantity((prevCount) => prevCount - 1);
    }
  };

  return (

    <div className="App">
      {isLoggedIn ? (
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout cartQuantity={cartQuantity} />}>
                <Route
                  index
                  element={<ShopPage handleAddToCart={handleAddToCart} />}
                />
                <Route path="SuccessPage" element={<SuccessModal cart={cart}/>}></Route>
                <Route
                  path="Checkout"
                  element={
                    <Checkout
                    setCart={setCart}
                      cart={cart}
                      handleIncreaseQuantity={handleIncreaseQuantity}
                      handleRemoveFromCart={handleRemoveFromCart}
                      handleReduceQuantity={handleReduceQuantity}
                      cartTotal={cartTotal}
                    />
                  }
                />
                <Route
                  path="AddToCart"
                  element={
                    <AddToCartPage
                      cart={cart}
                      handleIncreaseQuantity={handleIncreaseQuantity}
                      handleRemoveFromCart={handleRemoveFromCart}
                      handleReduceQuantity={handleReduceQuantity}
                      cartTotal={cartTotal}
                    />
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
    
  );
}

export default App;
