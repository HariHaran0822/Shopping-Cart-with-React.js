import React from "react";
import "./CartPage.css";
import { IoTrash } from "react-icons/io5";
import { AiOutlineLine } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import Checkout from "./Checkout";



function CartPage(props) {
  const cart = props.cart;

  const checkout=cart.map((item)=>{ return <Checkout item={item}/>})
  
  return (
    <div className="cart-section">
      {cart.map((item) => {
        return (
          <ul className="cart--ul">
            <div className="cart-img-sec">
              <li key={item.id}>
                {<img src={item.img} alt="img-in-CartPage-Missing" />}
              </li>
              <li>
               <h4> Quantity: {item.quantity}</h4>
              </li>
              <div className="cartpage-btn">
                <div
                  style={{
                    backgroundColor: "#dc4c64",
                    width: "50px",
                    height: "40px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4px 9px -4px #dc4c64",
                  }}
                  onClick={() => props.handleIncreaseQuantity(item)}
                >
                  <IoAdd
                    style={{
                      backgroundColor: "#dc4c64",
                      color: "white",
                      fontSize: "15px",
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#3b71ca",
                    width: "50px",
                    height: "40px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4px 9px -4px #3b71ca",
                  }}
                  onClick={() => props.handleRemoveFromCart(item)}
                >
                  <IoTrash
                    style={{
                      backgroundColor: "#3b71ca",
                      color: "white",
                      fontSize: "15px",
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: "#dc4c64",
                    width: "50px",
                    height: "40px",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4px 9px -4px #dc4c64",
                  }}
                  onClick={() => props.handleReduceQuantity(item)}
                >
                  <AiOutlineLine
                    style={{
                      backgroundColor: "#dc4c64",
                      color: "white",
                      fontSize: "15px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="cart-img-sec">
            <li>
              <h3> {item.title}</h3>
            </li>
            </div>
            <div className="cart-img-sec">

            <li>
              <h4>MRP:  {item.totalPrice} </h4>
            </li></div>
          </ul>
        );
      })}
    </div>
  );
}

export default CartPage;
