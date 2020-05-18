import React, { useContext } from "react";
import { NavBar } from "./NavBar";
import { ApartmentDataContext } from "../context/ApartmentData";

export default function Home() {
  const {
    PaidFlats,
    updateMaintenance,
    ApartmentDetails,
    userEmail,
  } = useContext(ApartmentDataContext);
  const multy = 100;
  const TotalFlats = parseInt(ApartmentDetails.flats);
  const TotalFloors = parseInt(ApartmentDetails.floors);
  let array = [];
  let mm;
  for (let floor = 1; floor <= TotalFloors; floor++) {
    mm = [];
    for (let flat = 1; flat <= TotalFlats; flat++) {
      if (flat <= TotalFlats) {
        let flatNumber = floor * multy + flat;
        if (PaidFlats.includes(flatNumber)) {
          mm.push(
            <button className="inactive active btn" id={flatNumber}>
              {flatNumber}
            </button>
          );
        } else {
          mm.push(
            <button className="inactive btn" id={flatNumber} key={flatNumber}>
              {flatNumber}
            </button>
          );
        }
      }
    }
    array.push(
      <div className="eachfloor" key={floor}>
        {mm}
      </div>
    );
  }
  let paidFlats = [];

  const handelFlatMaintenance = (e) => {
    if (e.target.type === "submit") {
      paidFlats.push(parseInt(e.target.textContent));
      e.target.classList.add("active");
    }
  };
  const handelSave = () => {
    // UpdateMaintenance(CurrentUser.email, paidFlats);
    updateMaintenance(paidFlats);
    // window.alert("Your Data is Saved");
  };
  return (
    <div>
      <NavBar />
      <p className="grey-text loginemail">Logged in as : {userEmail}</p>

      <div className="container center " style={{ width: "90%" }}>
        <div
          className="scrollableContainer"
          onClick={(e) => {
            handelFlatMaintenance(e);
          }}
        >
          {array}
        </div>
        <div className="center " style={{ marginTop: "10px" }}>
          <button
            className="btn indigo  indigo accent-4"
            onClick={handelSave}
            style={{ width: "150px", marginTop: "20px" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
