import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./Links/SignInLinks";
import SignOutLinks from "./Links/SignOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
  return (
    <nav className="navbar navbar-expand justify-content-between navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Lyrics App
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">{links}</div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
