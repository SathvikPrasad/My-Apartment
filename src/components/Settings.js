import React, { useContext, useState } from "react";
import { NavBar } from "./NavBar";
import { ApartmentDataContext } from "../context/ApartmentData";
export const Settings = () => {
  const { ApartmentDetails, updateDetails } = useContext(ApartmentDataContext);
  const [edit, setedit] = useState(true);
  const nameOfApartment = ApartmentDetails.nameOfApartment;
  const corpusFund = ApartmentDetails.corpusFund;
  const monthlyMaintenance = ApartmentDetails.monthlyMaintenance;

  const handelSubmit = (e) => {
    e.preventDefault();
    const { ApartmentName, CorpusFund, MonthlyMaintenance } = e.target.elements;
    let name;
    let corpus;
    let maintenance;
    ApartmentName.value
      ? (name = ApartmentName.value)
      : (name = nameOfApartment);
    CorpusFund.value ? (corpus = CorpusFund.value) : (corpus = corpusFund);
    MonthlyMaintenance.value
      ? (maintenance = MonthlyMaintenance.value)
      : (maintenance = monthlyMaintenance);
    updateDetails(name, corpus, maintenance);
    setedit(true);
    window.alert("Your Data is Updated");
  };

  return (
    <div>
      <NavBar />
      <div className="container center">
        <div
          className="container "
          style={{
            backgroundColor: "#202027",
            borderRadius: "20px",
            marginTop: "15vh",
            padding: "18px",
            width: "90%",
          }}
        >
          <div
            className="end "
            style={{ textAlign: "end", marginBottom: "35px" }}
          >
            <i
              className="far fa-edit "
              style={{
                fontSize: `${edit ? "25px " : "30px"}`,
                color: `${edit ? "#fff " : "#3d5afe"}`,
              }}
              onClick={() => {
                setedit(!edit);
              }}
            ></i>
          </div>
          <form onSubmit={handelSubmit}>
            <div className="row center lis">
              <p
                className="white-text col s6"
                style={{
                  backgroundColor: "#202027",
                  fontSize: "large",
                  marginTop: "8px",
                }}
              >
                Apartment Name :
              </p>
              <input
                id="Expense"
                name="ApartmentName"
                type="text"
                className="white-text col s6"
                placeholder={nameOfApartment}
                disabled={edit}
              />
            </div>
            <div className="row ">
              <p
                className="white-text col s6"
                style={{
                  backgroundColor: "#202027",
                  fontSize: "large",
                  marginTop: "8px",
                }}
              >
                Corpus Fund :
              </p>
              <input
                id="CorpusFund"
                name="CorpusFund"
                type="number"
                className="white-text col s6"
                placeholder={corpusFund}
                disabled={edit}
              />
            </div>
            <div className="row">
              <p
                className="white-text col s6"
                style={{
                  backgroundColor: "#202027",
                  fontSize: "large",
                  marginTop: "8px",
                }}
              >
                Monthly Maintenance :
              </p>
              <input
                id="MonthlyMaintenance"
                name="MonthlyMaintenance"
                type="number"
                className="white-text col s6"
                placeholder={monthlyMaintenance}
                disabled={edit}
              />
            </div>
            <button
              className="btn indigo accent-3"
              style={{
                marginTop: `${edit ? "0px" : "25px"}`,
                width: "100%",
                visibility: `${edit ? "hidden" : "visible"}`,
              }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
