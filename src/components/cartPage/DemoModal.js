import React, { useState } from "react";
import "./DemoModal.css";
// import SuccessModal from "../Modals/SuccessModal/SuccessModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function DemoModal({ cart, setModalIsOpen, setShow }) {
  console.log(cart);
  const [name, SetName] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [displayNameError, setDisplayNameError] = useState(false);
  const [date, setDate] = useState("");

  const [cardNo, setCardNo] = useState("");
  const [cardError, setCardError] = useState(false);
  const [displayCardError, setDisplayCardError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [displayPasswordError, setDisplayPasswordError] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);

  const handleName = (e) => {
    console.log(e.target.value);
    if (e.target.value.trim().length >= 8) {
      SetName(e.target.value);
      setNameError(false);
      setDisplayNameError(false);
      setAuthenticated(true);
    } else {
      setNameError(true);
      setDisplayNameError(true);
      // setAuthenticated(false);
    }
  };

  const handleCard = (e) => {
    console.log(e.target.value);
    if (e.target.value.length !== 14) {
      setCardError(true);
      setDisplayCardError(true);
    } else if (e.target.value.length === 14) {
      setCardError(false);
      setDisplayCardError(false);
      // setAuthenticated(true);
    }
    setCardNo(e.target.value);
  };

  const handleDate = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    if (e.target.value.length !== 4) {
      setPasswordError(true);
      setDisplayPasswordError(true);
    } else {
      setPassword(e.target.value);
      setAuthenticated(true)

      setPasswordError(false);
      setDisplayPasswordError(false);
    }
    setPassword(e.target.value);
    
  };

  const [isOpen, setIsOpen] = useState(false);

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
      color: "green",
    },
  };

  const handleOpenModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handlePay = (e) => {
    e.preventDefault();



    console.log("paid");
    handleOpenModal();

    setTimeout(() => {
      setShow(false);
    }, 3000);
    setTimeout(() => {
      setModalIsOpen(false);
    }, 3000);

    setTimeout(() => {
      return (window.location.pathname = "/");
    }, 3000);
  };
  return (
    <div className="modal">
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Success Modal"
      >
        <h2>Payment Successful!</h2>
      </Modal>
      <form className="form" onSubmit={handlePay}>
        <div className="card--detail">
          <label>Card Holder Name: </label>
          <input
            className={nameError ? "input error" : "input"}
            type="text"
            value={name}
            onChange={handleName}
          />
          {displayNameError && (
            <p style={{ color: "red" }}>Enter atleast 8 character</p>
          )}
        </div>
        <div className="card--detail">
          <label>Card No: </label>

          <input
            className={cardError ? "input error" : "input"}
            type="password"
            value={cardNo}
            onChange={handleCard}
            maxLength={14}
          />
          {displayCardError && (
            <p style={{ color: "red" }}>Enter 14 digit Number</p>
          )}
        </div>

        <div className="card--detail">
          <label>Expiry Date :</label>
          <input type="date" value={date} onChange={handleDate} />
        </div>
        <div className="card--detail">
          <label>4 digit PassCode :</label>
          <input
            className={passwordError ? "input error" : "input"}
            type="password"
            value={password}
            onChange={handlePassword}
            maxLength={4}
          />
          {displayPasswordError && (
            <p style={{ color: "red" }}>passcode is required</p>
          )}
        </div>
        <button
          type="submit"
          className="btn-pay"
          onClick={handlePay}
          disabled={!authenticated}
          // disabled={true}
        >
          Pay now
        </button>
      </form>
    </div>
  );
}

export default DemoModal;
