import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
// import { browserHistory } from "react-router";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import fire from "./config/Fire";
import "./css/index.css";

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
          <div>
            <Navigation />
            <Route exact path="/home" component={Home} />
            <Route exact path="/portal" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
