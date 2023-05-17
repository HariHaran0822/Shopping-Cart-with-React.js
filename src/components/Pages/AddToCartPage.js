import React, { useState } from "react";
import "./AddToCartPage.css";
import CartPage from "../cartPage/CartPage";
import TotalComponent from "../cartPage/TotalComponent";
import Checkout from "../cartPage/Checkout";
import DemoModal from "../cartPage/DemoModal";
import Modal from "react-modal";
import { AiOutlineLine } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";
import { Outlet, Link } from "react-router-dom";


Modal.setAppElement("#root");

function AddToCartPage(props) {
  const cart = props.cart;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const checkOut=()=>{
    return window.location.pathname = "/Checkout";
  }

  const onShow = () => {
    setShow(true);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const empty = (
    <h2 style={{ textAlign: "center", padding: "200px" }}>Cart is Empty</h2>
  );

  if (cart.length === 0) {
    return empty;
  }
  const customStyles = {
    content: {
      width: "700px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      flexDirection: "column",
    },
  };

  return (
    <div className="AddtoCart ">
      {" "}
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="close-btn" onClick={handleCloseModal}>
            x
          </div>

          <h2>Checkout Your Loved Items</h2>
          <div>
            {cart.map((item) => {
              return (
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    listStyleType: "none",
                    alignItems: "center",
                    padding: "0px",
                  }}
                >
                  <li>{item.title}</li>
                  <li>
                    <img
                      src={item.img}
                      alt="img"
                      style={{ width: "100px", height: "50px;" }}
                    />
                  </li>

                  <li>{item.totalPrice}</li>
                  <div
                    style={{
                      backgroundColor: "#dc4c64",
                      width: "50px",
                      height: "40px",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 4px 9px -4px #3b71ca",
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
                  <li>{item.quantity}</li>
                  <div
                    style={{
                      backgroundColor: "#dc4c64",
                      width: "50px",
                      height: "40px",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 4px 9px -4px #3b71ca",
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
                </ul>
              );
            })}

            <div class="btn-proceed">
              <div className="cartTotal">Total: {props.cartTotal} RS</div>
              <div className="buy" onClick={onShow}>
                {" "}
                Proceed to Buy{" "}
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
          {/* {show && (
            <DemoModal setShow={setShow} setModalIsOpen={setModalIsOpen} />
          )} */}
        </Modal>
      )}
      <CartPage
        cart={cart}
        price={props.price}
        handleIncreaseQuantity={props.handleIncreaseQuantity}
        handleRemoveFromCart={props.handleRemoveFromCart}
        handleReduceQuantity={props.handleReduceQuantity}
      />

      <div className="section-checkout">
        <TotalComponent cart={props.cartTotal} />
      <button className="checkout-button"> <h2><Link to="/Checkout" >Buy now</Link></h2></button>  
        <Outlet />

        {/* <div onClick={checkOut} className="checkout-button" > Checkout</div> */}
        <div> </div>
      </div>
    </div>
  );
}

export default AddToCartPage;
