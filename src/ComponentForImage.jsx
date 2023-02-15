import React from 'react';
import image from "./images/sloth.jpg";
import { Link } from "react-router-dom";

function ComponentForImage() {
  return (
    <div className='box'>
        <h2>Getting an image </h2>
        <img src={image} alt="image" />
        <div className="button">
        <Link to={"/pagerduty"}>Previous</Link>
        </div>
    </div>
  )
}

export default ComponentForImage