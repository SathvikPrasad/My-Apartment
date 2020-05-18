import React, { useContext } from "react";
import { LoginOrSignup } from "./LoginOrSignup";
import { ApartmentDataContext } from "../context/ApartmentData";
import Home from "./Home";
import { Expenses } from "./Expenses";
import { Settings } from "./Settings";
import LandingPage from "./LandingPage";
// import Login from "./Login";

export default function ViewController() {
  const { uistate, user } = useContext(ApartmentDataContext);

  if (user) {
    if (uistate === "home") {
      return <Home />;
    }
    if (uistate === "expenses") {
      return <Expenses />;
    }
    if (uistate === "settings") {
      return <Settings />;
    }
  } else if (uistate === "login") {
    return <LoginOrSignup />;
  } else {
    return <LandingPage />;
  }
}
