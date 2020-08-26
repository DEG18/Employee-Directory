import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <form className="form-inline my-lg-0">
      <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
    </form>
  );
}

export default Navbar;
