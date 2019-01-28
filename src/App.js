import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Links/Navbar";
import Login from "./components/layouts/auth/Login";
import Signup from "./components/layouts/auth/Signup";
import Tracks from "./components/track/Tracks";
import Lyrics from "./components/track/Lyrics";
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
            <Route path="/register" component={Signup} />
            <Route path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
