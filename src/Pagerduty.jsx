import React from 'react';
import logo from "./images/pagerduty-gif.gif";
import { Link } from "react-router-dom";

function Pagerduty() {
    return (
        <div className='box'>
            <h2>Getting messages </h2>
            <img src={logo} alt="" />
            <div className="button">
                <Link to={"/"}>Previous</Link>
                <Link to={"/image"}>Next</Link>
            </div>
        </div>
    )
}

export default Pagerduty