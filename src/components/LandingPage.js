import React, { useContext } from "react";
import mainimage from "../assetss/main.svg";
import expenses from "../assetss/expenses.svg";
import status from "../assetss/status.svg";
import { ApartmentDataContext } from "../context/ApartmentData";
export default function LandingPage() {
  const { updateUI } = useContext(ApartmentDataContext);
  return (
    <div>
      <nav className="nav">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right">
            <li>
              <button
                className="btn indigo"
                onClick={() => {
                  updateUI("login");
                }}
              >
                Join Now
              </button>
            </li>
            <li>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  updateUI("login");
                }}
                className="login"
              >
                Login
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container maincontainer white-text">
        <h1 style={{ marginTop: "10vh" }} className="tetxtitle">
          My Apartment
        </h1>
        <p className="titletext">True expense manager for apartments</p>
      </div>

      <div className="center">
        <img src={mainimage} alt="" className="mainsvg" />
      </div>

      <div className="container second">
        <div className="row">
          <p className="expense-text white-text col s5">
            You can add monthly Expenses of the apartment
          </p>
          <img src={expenses} alt="" className="expensesvg col s7" />
        </div>
      </div>
      <div className="container third">
        <div className="row">
          <img src={status} alt="" className="statussvg col s7" />
          <p className="expense-text white-text col s5">
            Owners and tenants can view the status of the Apartment from our
            mobile application
          </p>
        </div>
      </div>
    </div>
  );
}
