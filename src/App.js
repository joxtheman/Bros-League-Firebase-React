import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import fire from "./config/Fire";

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
      //  console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return <div>{this.state.user ? <Dashboard /> : <Login />}</div>;
  }
}

export default App;
