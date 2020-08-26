import React from "react";
import "../styles/Employee.css";

const employeeArray=[{image: "placeholder" , name: "Luyu", phone: "123-456-7891", email:"123@good.com" , dob:"08/26/2020",}]

function Employee() { 
    return (
        <div className="container">
            <hr />
            <div className="row">
                <div className="col-md">
                {employeeArray[0].image}
                </div>
                <div className="col-md">
                {employeeArray[0].name}
                </div>
                <div className="col-md">
                {employeeArray[0].phone}
                </div>
                <div className="col-md">
                {employeeArray[0].email}
                </div>
                <div className="col-md">
                {employeeArray[0].dob}
                </div>
            </div>
        </div>
    );
 }


export default Employee;