import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" style={{ margin: "10px" }}>
        Home
      </Link>
      <Link to="/phones">Phone List</Link>
    </div>
  );
};

export default Navbar;
