import React, { useContext } from "react";
import { NavBar } from "./NavBar";
import { ExpensesForm } from "./ExpensesForm";
import { ApartmentDataContext } from "../context/ApartmentData";
export const Expenses = () => {
  const { ApartmentDetails, PaidFlats, Expenses } = useContext(
    ApartmentDataContext
  );

  const corpusFund = ApartmentDetails.corpusFund;
  const monthlyMaintenance = ApartmentDetails.monthlyMaintenance;

  let Totalamount = Expenses.map((e) => {
    return parseInt(e.amount);
  }).reduce((a, b) => a + b, 0);

  const MaintenanceCollected = PaidFlats.length * monthlyMaintenance;
  const Balance = MaintenanceCollected - Totalamount;

  return (
    <div>
      <NavBar />

      <div className="row center grey-text">
        <h5 className="col s4 lis">Corpus Fund: {corpusFund}</h5>
        <h5 className="col s4 lis">
          Maintenance Collected: {MaintenanceCollected}
        </h5>
        <h5 className="col s4 lis">Balance: {Balance}</h5>
      </div>
      <div className="container expensescontainer ">
        <div className="row ">
          {Expenses.map((e) => {
            return (
              <div key={e.id}>
                <div className="col s8 white-text" style={{ fontSize: "18px" }}>
                  {e.expense}
                </div>
                <div
                  className="col s4 center white-text"
                  style={{ fontSize: "18px" }}
                >
                  {e.amount}
                </div>
              </div>
            );
          })}
          <div className="col s12" style={{ marginTop: "20px" }}></div>
          <div>
            <div className=" offset-s7 col s1 center white-text lis">Total</div>
            <div className="col s4 center white-text lis">{Totalamount}</div>
          </div>
        </div>
      </div>
      <ExpensesForm />
    </div>
  );
};
