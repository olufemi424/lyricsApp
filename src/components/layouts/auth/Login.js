import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signIn } from "../../../store/actions/authActions";

class Login extends Component {
  state = { email: "", password: "", errors: {} };

  hanleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="login auth">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center py-4">Lyricap</h1>
              <h2 className="text-center pb-3">Log In</h2>
              <p className="testing">
                For testing purposes, login with email: admin@email.com,
                password: password
              </p>
              <form onSubmit={this.hanleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <button className="btn text-light btn-block mt-4">
                  Log In
                </button>
                <div className="text-danger text-center py-3">
                  {authError ? <p>{authError}</p> : ""}
                </div>
              </form>
              <p className="text-center">
                New user ?{" "}
                <Link className="text-light" to="/register">
                  {" "}
                  <span className="text-dark">Signup </span>{" "}
                </Link>
              </p>
              <p className="text-center">
                Forget Password ?{" "}
                <Link className="text-light" to="/reset">
                  {" "}
                  <span className="text-dark">Reset</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = {
  signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
