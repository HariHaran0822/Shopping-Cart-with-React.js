import React, { useState } from "react";
import Modal from "react-modal";
import "./AtmCard.css";
import { FcGoogle } from "react-icons/fc";
import cards from "../Images/cards5.jpeg";
import tick from "../Images/tick.avif";
import { useNavigate } from "react-router-dom";

const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "1000px",
    height: "200px",
    backgroundColor: "#dcf2e2",
    border: "2px solid #024d16",
    overflow: "hidden",
  },
};

export const DebitCard = (props) => {
  return (
    <div className="payment" onClick={props.handleShowForm}>
      Credit/Debit Cards{" "}
      <img style={{ width: "70px" }} src={cards} alt="cards" />
    </div>
  );
};

export const GooglePay = (props) => {
  return (
    <div className="payment" onClick={props.handleShowButton}>
      Pay with <FcGoogle />
      Pay
    </div>
  );
};

export const DebitForm = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [cardDetail, setCardDetail] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

  const [cardError, setCardError] = useState(false);
  const [cvcError, setCvcError] = useState(false);

  const generateOrderNumber = () => {
    const randomOrderNumber = Math.floor(Math.random() * 1000000);
    return randomOrderNumber.toString();
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardDetail.length < 16 || cvc.length === 0) {
      setCardError(true);
      setCvcError(true);
      setShowModal(false);
    } else {
      setCardError(false);
      setCvcError(false);

      const generatedOrderNumber = generateOrderNumber();
      setOrderNumber(generatedOrderNumber);
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
        props.setCart([""]);
        window.location.reload();

        navigate("/");
      }, 2000);
    }
  };

  function CardChangeHandler(e) {
    setCardDetail(e.target.value);
  }
  function dateChangeHandler(e) {
    setDate(e.target.value);
  }
  function cvcChangerHandler(e) {
    setCvc(e.target.value);
  }
  return (
    <div className="container-card">
      <form className="form-d" onSubmit={handleSubmit}>
        <div className="label">
          <label>Card number</label>
          <input
            // pattern="[0-9]{16}"

            maxLength={16}
            placeholder="1234 1234 1234 1234"
            type="text"
            onChange={CardChangeHandler}
          />
          {cardError && (
            <span style={{ color: "red" }}>Enter valid Card Number</span>
          )}
        </div>
        <div className="label">
          <label>Expiry date</label>
          <input
            type="date"
            placeholder="MM/YYYY"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="label">
          <label>CVC</label>
          <input
            type="text"
            // pattern="[0-9]{16}"
            placeholder="CVC"
            onChange={cvcChangerHandler}
            maxLength={3}
          />
          {cvcError && (
            <span style={{ color: "red" }}>Enter valid CVC digits</span>
          )}
        </div>
        <button className="pay-but-card" type="submit">
          <h3>Place Order {props.cartTotal}</h3>
        </button>
      </form>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customModalStyles}
      >
        <h2>Order Placed Successfully!</h2>
        <p>Your order number is {orderNumber}</p>
        <img src={tick} alt="tick" style={{ width: "100px", height: "80px" }} />
      </Modal>
    </div>
  );
};

const GooglePayBtn = () => {
  return (
    <button className="pay-but">
      Buy with <FcGoogle />
      Pay
    </button>
  );
};

function AtmCard(props) {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    setShowButton(false);
  };

  const handleShowButton = () => {
    setShowForm(false);
    setShowButton(true);
  };

  return (
    <div className="Atm-section">
      <div>
        <GooglePay handleShowButton={handleShowButton} />
        <DebitCard
          handleShowForm={handleShowForm}
          cartTotal={props.cartTotal}
        />
        {showForm && (
          <DebitForm
            cart={props.cart}
            cartTotal={props.cartTotal}
            setCart={props.setCart}
          />
        )}
      </div>
      {showButton && <GooglePayBtn />}
    </div>
  );
}

export default AtmCard;
