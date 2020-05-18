import React from "react";
import ApartmentDataProvider from "./context/ApartmentData";
import ViewController from "./components/ViewController";

function App() {
  return (
    <ApartmentDataProvider>
      <ViewController />
    </ApartmentDataProvider>
  );
}

export default App;
