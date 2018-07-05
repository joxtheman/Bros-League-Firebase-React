import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu, Segment } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";
import { browserHistory } from "react-router";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ""
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    // this.redirect = this.redirect.bind(this);
  }

  //   redirect(to) {
  //     browserHistory.push(to);
  //   }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
    browserHistory.push("/" + name);
  }

  render() {
    const { activeItem } = this.state;
    return (
      //   <BrowserRouter>
      <Segment inverted>
        <Menu inverted secondary>
          <Link to="/home">
            <Menu.Item
              className="span"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
          </Link>

          <Link to="/portal">
            <Menu.Item
              className="span"
              name="portal"
              active={activeItem === "portal"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/signup">
            <Menu.Item
              className="span"
              name="signup"
              active={activeItem === "signup"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </Segment>
      //   </BrowserRouter>
    );
  }
}
export default Navigation;
