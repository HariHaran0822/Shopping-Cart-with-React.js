import React ,{useState}from "react";
import "./Checkout.css";
import { AiOutlineLine } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";
import DetailForm from "./DetailForm";
import AtmCard from "./AtmCard";
function Checkout(props) {
  const [showCard,setShowCart]=useState(false)
  return (
    <div className="checkout-page">
      <h1>Complete your order</h1>
      <div className="checkout-container">
        <div className="detail">
          <DetailForm  setShowCart={setShowCart}/>
       {  showCard&& <AtmCard cart={props.cart} cartTotal={props.cartTotal} setCart={props.setCart}/>}
        </div>
        <div className="cloumn-2">
          <h2>YOUR PRODUCTS</h2>
          <div className="checkout-items-container-Main">
            <div className="checkout-head-item">
              <h4> Product</h4>
              <h4> Sub Total</h4>
            </div>
            <div className="checkout-items-container">
              {props.cart.map((item) => {
                return (
                  <ul key={item.id} className="checkout-items">
                    <li> {item.title}</li>
                    <li>
                      <img
                        style={{ width: "60px" }}
                        src={item.img}
                        alt="Check-out-page-checkout"
                      />
                    </li>
                    <div className="qty">
                    <li>Quantity: {item.quantity}</li>
                    <div className="cartpage-btn-checkout">
                      <div
                        style={{
                          backgroundColor: "#dc4c64",
                          width: "25px",
                          height: "22px",
                          borderRadius: "0px",
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
                          width: "25px",
                          height: "22px",
                          borderRadius: "0px",
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
                          width: "25px",
                          height: "22px",
                          borderRadius: "0px",
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
                    <li>{item.totalPrice}</li>
                  </ul>
                );
              })}
            </div>
            <div className="checkout-head-item">
              <h4> Sub Total</h4>
              <h4>MRP: {props.cartTotal}rs </h4>
            </div>
            <div className="checkout-head-item">
              <h2> Total</h2>
              <h4>MRP: {props.cartTotal}rs </h4>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;
