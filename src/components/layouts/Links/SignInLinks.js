import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const SignedInLinks = props => {
  const { initials } = props.profile;
  return (
    <React.Fragment>
      <Link className="nav-item nav-link active" to="/">
        Dashboard <span className="sr-only">(current)</span>
      </Link>

      <Link to="" onClick={props.signOut} className="nav-item nav-link">
        Logout
      </Link>
      <div
        className="btn btn-light"
        style={{
          marginLeft: "10px",
          padding: "7px",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          border: "2px #f4f4f4 solid"
        }}
      >
        {initials}
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
