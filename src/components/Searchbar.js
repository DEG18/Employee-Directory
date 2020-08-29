import React from "react";
import "../styles/Navbar.css";

function Searchbar(props) {
  return (
    <form className="form-inline my-lg-0">
      <input className="form-control " onChange={(e)=> props.handleSearchChange(e)} type="search" placeholder="Search" aria-label="Search" />
    </form>
  );
}

export default Searchbar;
