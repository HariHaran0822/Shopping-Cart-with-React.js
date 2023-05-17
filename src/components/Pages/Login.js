import React, { useState } from "react";
import "./Login.css";

function Login({ setShowWebsite, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  // const [valid, setValid] = useState(false);

  const handleEmail = (e) => {
    if (!e.target.value.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    if (e.target.value.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 && password.length === 0) {
      setEmptyEmail(true);
      setEmptyPassword(true);
    } 
  else{
      setEmptyEmail(false);
      setEmptyPassword(false);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true); // Update the login status
    }
  };
  return (
    <div className="login-container">
      <div className="log">
        <div className="log-con">
          <h3>Login </h3>
          <form className="log-form" onSubmit={handleSubmit}>
            <div className="logs-align">
              <label className="input-lab">Email Address: </label>
              <input
                className="input-log"
                type="email"
                value={email}
                onChange={handleEmail}
              />
              {emailError && (
                <span style={{ color: "red" }}>Please Enter valid email</span>
              )}
              {emptyEmail && (
                <span style={{ color: "red" }}>Please Enter Email Address</span>
              )}
            </div>

            <div className="logs-align">
              <label className="input-lab">Password: </label>
              <input
                className="input-log"
                type="password"
                value={password}
                onChange={handlePassword}
              />
              {passwordError && (
                <span style={{ color: "red" }}>
                  Enter atleast 8 Digit as Your password
                </span>
              )}
              {emptyPassword && (
                <span style={{ color: "red" }}>Please Enter your Password</span>
              )}
            </div>
            {/* <span style={{color:'red'}} >Enter atleast 8 Digit as Your password</span> */}
            <div className="rem">
              {" "}
              <input type="checkbox" />{" "}
              <label className="input-lab">Remember me</label>
            </div>
            {/* {valid && <span style={{color:'red'}} >invalid input</span>} */}
            <div>
              <button className="btn-login" onClick={handleSubmit}>
                {" "}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
