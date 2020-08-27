import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Infoheader from "./components/Infoheader";
import Employee from "./components/Employee";
import Employees from "./Employees.json"

const employeeArray = Employees.map((employee) => <Employee name={employee.name} image={employee.image} phone={employee.phone} dob={employee.dob} email={employee.email} />);
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Infoheader />
      {employeeArray}
    </div>
  );
}

export default App;
