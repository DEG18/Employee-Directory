import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Infoheader from "./components/Infoheader";
import Employee from "./components/Employee";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Infoheader />
      <Employee />
    </div>
  );
}

export default App;
