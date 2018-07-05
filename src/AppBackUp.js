import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Dashboard from "./components/Dashboard";
import fire from "./config/Fire";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // this.authListener = this.authListener.bind(this);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div className="App__Aside">
            <div className="title">
              {" "}
              <h1>
                <strong>BROES LEAGUE</strong>
              </h1>
            </div>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/sign-up"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-up"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <div>
              <Route exact path="/sign-up" component={SignUpForm} />
              <Route exact path="/" component={SignInForm} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
