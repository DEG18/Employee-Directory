import React from "react";
// import Employees from "../Employees.json"
import "../styles/Employee.css";

// const employeeArray=[{image: "placeholder" , name: "Luyu", phone: "123-456-7891", email:"123@good.com" , dob:"08/26/2020",}]

function Employee(props) { 
    return (
        <div className="container">
            <hr />
                <div className="row">
                    <div className="col-md">
                        <img alt={props.name} src={props.image} className="img-thumbnail"/>
                    </div>
                    <div className="col-md">
                        {props.name}
                    </div>
                    <div className="col-md">
                    {props.phone}
                    </div>
                    <div className="col-md">
                        {props.email}
                    </div>
                    <div className="col-md">
                        {props.dob}
                    </div>
                </div>
        </div>
    );
 }


export default Employee;