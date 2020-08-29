import React from "react";
import "../styles/Employee.css";


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