import React, { useState, useContext } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { ApartmentDataContext } from "../context/ApartmentData";
import logo from "../assetss/logo192.png";
export const LoginOrSignup = () => {
  const [Status, setStatus] = useState("login");
  const { updateUI } = useContext(ApartmentDataContext);
  return (
    <div>
      <div>
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => {
            updateUI("landing");
          }}
          className="white-text myapartment-text"
        >
          <img
            style={{ height: "45px", width: "45px", marginRight: "5px" }}
            src={logo}
            alt=""
          />
          My Apartment
        </h1>
      </div>
      {Status === "login" ? <Login /> : <SignUp />}

      <p className=" signinorsignup white-text">
        {" "}
        {Status === "login"
          ? " dont have an account ?"
          : "have an account ?"}{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() =>
            Status === "login" ? setStatus("signup") : setStatus("login")
          }
        >
          {Status === "login" ? "SignUp" : "Login"}
        </span>
      </p>
    </div>
  );
};
