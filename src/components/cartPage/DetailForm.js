import React, { useState } from "react";
import "./DetailForm.css";

function DetailForm({setShowCart}) {
  const [email, setEmail] = useState("");
  const [errorEmail,setErrorEmail]=useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorPhone,setErrorPhone]=useState(false);
const[able,setAble]=useState(true)
  function emailHandler(e) {

    if(!e.target.value.includes('@')){
        setErrorEmail(true);
    }else{
        setErrorEmail(false);
        setAble(false);

    }
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function fNameHandler(e) {
    setFname(e.target.value);
    console.log(e.target.value);

  }

  function lNameHandler(e) {
    setLname(e.target.value);
    console.log(e.target.value);

  }

  function countryHandler(e) {
    setCountry(e.target.value);
    console.log(e.target.value);

  }
  function addressHandler(e) {
    setAddress(e.target.value);
    console.log(e.target.value);

  }

  function cityHandler(e){
setCity(e.target.value);
console.log(e.target.value);

  }
  function pinHandler(e){
    setPin(e.target.value);
    console.log(e.target.value);

  }

  function phoneHandler(e){
    if(e.target.value.length < 10 ||e.target.value.length>13 ){
        setErrorPhone(true);
    }else{
        setErrorPhone(false);
        setAble(false);


    }
    setPhoneNumber(e.target.value);
    console.log(e.target.value);

  }

 const submitSaveHandler=(e)=>{
    e.preventDefault();
    // if(email.length === 0 && phoneNumber.length===0){
    //     setAble(false);
    // }else{
    //     setAble(true);

    // }
    setShowCart(true)
 }
  return (
    <div className="main-d-form">
      <form className="form-con-detail" onSubmit={submitSaveHandler}>
        <div className="form-detail">
          <label>Customer information</label>
          <input
            onChange={emailHandler}
            value={email}
            placeholder="Email Address *"
          />
          {errorEmail&&<span style={{color:'red'}}>Invalid Email Address</span>}
        </div>

        <div className="form-detail">
          <label>Billing & Shipping</label>
          <div className="names">
            <input
              onChange={fNameHandler}
              value={fname}
              // style={{ width: "300px" }}
              placeholder="First Name *"
            />
            <input
              onChange={lNameHandler}
              value={lname}
              // style={{ width: "300px" }}
              placeholder="Last Name *"
            />
          </div>
        </div>

        <div className="form-detail">
          <label>Country </label>
          <input
            onChange={countryHandler}
            value={country}
            placeholder="Country *"
          />
        </div>
        <div className="form-detail">
          <label>Address:</label>
          <input
            onChange={addressHandler}
            value={address}
            placeholder="House number and Street name *"
          />
        </div>

        <div className="form-detail">
          <label>City:</label>
          <input onChange={cityHandler}
            value={city} placeholder="City *" />
        </div>

        <div className="form-detail">
          <label>PinCode:</label>
          <input onChange={pinHandler}
            value={pin} placeholder="Pin*" />
        </div>

        <div className="form-detail">
          <label>PhoneNumber </label>
          <input  onChange={phoneHandler}
            value={phoneNumber} placeholder="Phone *" />
        </div>
        {errorPhone&&<span style={{color:'red'}}>Phone number should atleast have 10 digits</span>}
        <button className="save" onClick={submitSaveHandler} disabled={able}> Save </button>
      </form>
    </div>
  );
}

export default DetailForm;
