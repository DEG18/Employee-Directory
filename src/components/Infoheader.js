import React from "react";
import "../styles/Infoheader.css";

function Infoheader() { 
  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-md">
          Image
        </div>
        <div className="col-md">
          Name
        </div>
        <div className="col-md">
          Phone
        </div>
        <div className="col-md">
          Email
        </div>
        <div className="col-md">
          DOB
        </div>
      </div>
    </div>
  );
 }

export default Infoheader;
