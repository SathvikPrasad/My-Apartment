import React, { useContext } from "react";
import { ApartmentDataContext } from "../context/ApartmentData";

export const ExpensesForm = () => {
  const { UpdateExpenses } = useContext(ApartmentDataContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    const { Expense, amount } = e.target.elements;
    UpdateExpenses(Expense.value, amount.value);
    Expense.value = "";
    amount.value = "";
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={handelSubmit}>
          <div className="input-field col s6">
            <input
              id="Expense"
              name="Expense"
              type="text"
              className="white-text"
            />
            <label
              htmlFor="Expense"
              className="white-text"
              style={{ backgroundColor: "#2f303a" }}
            >
              Expense
            </label>
          </div>
          <div className="input-field col s4">
            <input
              id="amount"
              name="amount"
              type="number"
              className="white-text"
            />
            <label
              htmlFor="amount"
              className="white-text"
              style={{ backgroundColor: "#2f303a" }}
            >
              amount
            </label>
          </div>
          <div className="col s2 center">
            <button
              className="btn indigo accent-3 "
              style={{ marginTop: "25px" }}
            >
              <span className="lis">Add</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
