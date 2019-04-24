import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Links/Navbar";
import Login from "./components/layouts/auth/Login";
import PasswordReset from "./components/layouts/auth/PasswordReset";
import Signup from "./components/layouts/auth/Signup";
import Tracks from "./components/track/Tracks";
import Lyrics from "./components/track/Lyrics";
import PageNotFound from "./components/layouts/commons/PageNotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Tracks} />
            <Route path="/login" component={Login} />
            <Route path="/reset" component={PasswordReset} />
            <Route path="/register" component={Signup} />
            <Route path="/lyrics/track/:id" component={Lyrics} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
