import React from "react";
import { Link } from "react-router-dom";

const PhoneList = ({ phones }) => {
  return (
    <div>
      {phones.map((eachPhone) => {
        return (
          <Link to={`/phones/${eachPhone._id}`}>
            <h3>{eachPhone.name}</h3>
          </Link>
        );
      })}
      {console.log("In the List", phones)}
    </div>
  );
};

export default PhoneList;
