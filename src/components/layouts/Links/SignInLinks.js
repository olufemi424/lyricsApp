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
        className="btn btn-dark"
        style={{
          marginLeft: "10px",
          padding: "5px",
          borderRadius: "50%",
          width: "35px",
          height: "35px"
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
