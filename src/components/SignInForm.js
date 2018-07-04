import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import fire from "../config/Fire";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        let message = document.getElementById("message");
        message.innerHTML = "";
        let newDiv = document.createElement("h2");
        newDiv.innerHTML = "YOU ARE LOGGED IN!!!";
        message.appendChild(newDiv);
      })
      .catch(error => {
        let message = document.getElementById("message");
        message.innerHTML = "";
        let newDiv = document.createElement("h2");
        newDiv.innerHTML = error;
        message.appendChild(newDiv);
      });
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormCenter">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>{" "}
            <Link to="/sign-up" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>

        <div id="message" />
      </div>
    );
  }
}

export default SignInForm;
