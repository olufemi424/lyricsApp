import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { resetPassword } from "../../../store/actions/authActions";

class PasswordReset extends Component {
  state = { email: "" };

  hanleSubmit = e => {
    e.preventDefault();
    this.props.resetPassword(this.state, this.props.history);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { authError, resetSuccess, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="signup auth">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center py-4">Lyricap</h1>
              <h2 className="text-center pb-3">Reset Passsword</h2>
              <form onSubmit={this.hanleSubmit}>
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
                <button className="btn text-light btn-block mt-4">Reset</button>
                <div className="text-danger text-center py-3">
                  {authError ? <p>{authError}</p> : ""}
                </div>
                <div className="text-light text-center py-3">
                  {resetSuccess ? <p>{resetSuccess}</p> : ""}
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
    resetSuccess: state.auth.resetSuccess,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = {
  resetPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordReset);
