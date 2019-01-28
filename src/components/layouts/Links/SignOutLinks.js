import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <NavLink className="nav-item nav-link" to="/login">
        Login
      </NavLink>
      <NavLink className="nav-item nav-link" to="/register">
        Signup
      </NavLink>
    </React.Fragment>
  );
};

export default SignedOutLinks;
