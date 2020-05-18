import React, { useContext } from "react";
import app from "firebase";
import { ApartmentDataContext } from "../context/ApartmentData";
import logo from "../assetss/logo192.png";

export const NavBar = () => {
  const { ApartmentDetails, updateUI } = useContext(ApartmentDataContext);
  return (
    <div>
      <nav>
        <div className="nav-wrapper nav">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              updateUI("home");
            }}
            className="logo"
          >
            <img
              style={{ height: "25px", width: "25px", marginRight: "5px" }}
              src={logo}
              alt=""
            />
            {ApartmentDetails.nameOfApartment}
          </span>
          <ul id="nav-mobile" className="right">
            <li>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  updateUI("expenses");
                }}
                id="expenses"
                className="lis"
              >
                Expenses
              </span>
            </li>
            <li>
              <span
                style={{ cursor: "pointer", padding: "20px" }}
                onClick={() => updateUI("settings")}
                id="expenses"
                className="lis"
              >
                Settings
              </span>
            </li>
            <li>
              <span
                style={{ cursor: "pointer" }}
                className="grey-text lis"
                onClick={() => {
                  app.auth().signOut();
                }}
              >
                Sign Out
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
