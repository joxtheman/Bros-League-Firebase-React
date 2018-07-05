import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import "../css/login.css";

class Login extends Component {
  render() {
    return (
      <div className="main">
        {/* <Segment inverted> */}
        <div className="login">
          <h1>Portal Login</h1>
          <Form>
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
              Login
            </Button>
            <div className="messages_below_form">
              <div>
                <Link to="#">
                  <p>Forgot your password? Click here</p>
                </Link>
              </div>
              {/* <div>
                <Link to="/signup">
                  <p>Create an account</p>
                </Link>
              </div> */}
            </div>
          </Form>
        </div>

        {/* </Segment> */}
      </div>
    );
  }
}

export default Login;
