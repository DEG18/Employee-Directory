import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Employee from "./Employee";
import Infoheader from "./Infoheader";
import Employees from "../Employees.json"


class Datatable extends Component {
  state = {
    search: "",
    employees: Employees,
    filterEmployees: Employees
  };

  handleSearchChange = event => {
    // const name = event.target.name;
    console.log(event.target.value);
    const filter = event.target.value;
    const filterList = this.state.employees.filter((employee) => {
      let values = Object.values(employee).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    })
    this.setState({
      filterEmployees: filterList 
    });
  };


  render() {
    return (
      <div>
        <Searchbar handleSearchChange={this.handleSearchChange} />
        <Infoheader />
        {this.state.filterEmployees.map((employee) => <Employee key={employee.id} name={employee.name}
          image={employee.image} phone={employee.phone} dob={employee.dob}
          email={employee.email} />)}
      </div>
    );
  }
}

export default Datatable;