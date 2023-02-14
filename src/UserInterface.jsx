import React from 'react';
import gif from "./images/ui-gif.gif";
import { Link } from "react-router-dom";

function UserInterface() {
  return (
    <div className='ui-box'>
        <h2>Interaction with a user</h2>
        <img src={gif} alt="" />
        <button>
        <Link to={"/pagerduty"}>Next</Link>
        </button>
    </div>
  )
}

export default UserInterface