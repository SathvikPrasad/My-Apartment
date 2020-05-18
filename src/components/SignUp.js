import React, { useContext } from "react";

import app from "../FireBase";
import { ApartmentDataContext } from "../context/ApartmentData";
function SignUp() {
  const { UpdateData } = useContext(ApartmentDataContext);
  const handleSignUp = async (event) => {
    event.preventDefault();
    const {
      email,
      password,
      nameOfApartment,
      TotalFloors,
      TotalFlats,
      corpusFund,
      monthlyMaintenance,
    } = event.target.elements;
    UpdateData(
      email.value,
      password.value,
      nameOfApartment.value,
      TotalFloors.value,
      TotalFlats.value,
      corpusFund.value,
      monthlyMaintenance.value
    );
  };

  return (
    <div>
      <div className=" container signin-container">
        <form onSubmit={handleSignUp}>
          <div className="input-field">
            <input
              id="emial"
              name="email"
              type="email"
              className="white-text"
            />
            <label
              htmlFor="email"
              className="white-text"
              style={{ backgroundColor: "#202027" }}
            >
              Email
            </label>
          </div>
          <div className="input-field">
            <input
              id="password"
              name="password"
              type="password"
              className="white-text"
            />
            <label
              htmlFor="password"
              className="white-text"
              style={{ backgroundColor: "#202027" }}
            >
              Password
            </label>
          </div>
          <div className="input-field">
            <input
              id="nameOfApartment"
              name="nameOfApartment"
              type="text"
              className="white-text"
            />
            <label
              htmlFor="nameOfApartment"
              className="white-text"
              style={{ backgroundColor: "#202027" }}
            >
              Name of Apartment
            </label>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="TotalFloors"
                name="TotalFloors"
                type="number"
                className="white-text"
              />
              <label
                htmlFor="TotalFloors"
                className="white-text"
                style={{ backgroundColor: "#202027" }}
              >
                Total Number of Floors
              </label>
            </div>
            <div className="input-field col s6">
              <input
                id="TotalFlats"
                name="TotalFlats"
                type="number"
                className="white-text"
              />
              <label
                htmlFor="TotalFlats"
                className="white-text"
                style={{ backgroundColor: "#202027" }}
              >
                Total Number of Flats Per Floor
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="corpusFund"
                name="corpusFund"
                type="text"
                className="white-text"
              />
              <label
                htmlFor="corpusFund"
                className="white-text"
                style={{ backgroundColor: "#202027" }}
              >
                Corpus Fund
              </label>
            </div>
            <div className="input-field col s6">
              <input
                id="monthlyMaintenance"
                name="monthlyMaintenance"
                type="text"
                className="white-text"
              />
              <label
                htmlFor="monthlyMaintenance"
                className="white-text"
                style={{ backgroundColor: "#202027" }}
              >
                Monthly Maintenance
              </label>
            </div>
          </div>

          <div className="submit-button">
            <button className=" waves-effect indigo accent-3 btn ">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
