import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";

class SignUp extends Component {
  render() {
    return (
      <div className="main">
        <div className="login">
          <h1>SignUp</h1>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input type="text" placeholder="Name" required=" " />
            </Form.Field>

            <Form.Field>
              <label>Email</label>
              <input type="text" placeholder="Email" required=" " />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                className="password"
                placeholder="Password"
                required=" "
              />
            </Form.Field>
            <Button basic inverted color="yellow" type="submit">
              Signup
            </Button>
            <div className="messages_below_form">
              <div>
                <Link to="/portal">
                  <p>Already a member? Click Here</p>
                </Link>
              </div>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignUp;
