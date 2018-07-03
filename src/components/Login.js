import React, { Component } from "react";
// import { Link } from "react-router-dom";
import fire from "../config/Fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Test Login</h1>
        <form>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <button type="submit" onClick={this.login}>
            Login
          </button>
          <span>------</span>
          <button onClick={this.signup}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Login;
