import React from 'react';
import logo from "./images/pagerduty-gif.gif";
import { Link } from "react-router-dom";

function Pagerduty() {
  return (
    <div className='pd-box'>
        <h2>Getting messages </h2>
        <img src={logo} alt="" />
        <button>
        <Link to={"/"}>Previous</Link>
      </button>
    </div>
  )
}

export default Pagerduty