import React from "react";
import { Link } from "react-router-dom";

const PhoneContent = ({ phone }) => {
  return (
    <div>
      <img src={`/assets/images/${phone.imageFileName}`} alt={phone.name} />
      <h1>{phone.name}</h1>
      <h3>Manufacturer: {phone.manufacturer} </h3>
      <h5>
        Color: {phone.color}, Price:
        {phone.price}, Screen: {phone.screen}, Processor: {phone.processor},
        ram: {phone.ram}
      </h5>
      <p>Description: {phone.description}</p>
      <Link to="/phones">Back</Link>
    </div>
  );
};

export default PhoneContent;
