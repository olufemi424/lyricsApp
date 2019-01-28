import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/actions/authActions";

class Login extends Component {
  state = { firstName: "", lastName: "", email: "", password: "", errors: {} };

  hanleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center py-4">LyricsApp</h1>
              <h4 className="text-center pb-3">
                Signup, Enjoy your favorite songs lyrics.
              </h4>
              <form onSubmit={this.hanleSubmit}>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    required
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    required
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
                    required
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-light btn-outline-dark btn-block mt-4"
                />
                <div className="text-danger text-center py-3">
                  {authError ? <p>{authError}</p> : ""}
                </div>
              </form>
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

const mapDispatchToProps = dispatch => {
  return {
    signUp: data => dispatch(signUp(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
