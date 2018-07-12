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

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ""
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    
  }

 
  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu inverted secondary>
            <Menu.Item
              className="span"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="span"
              name="portal"
              active={activeItem === "portal"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="span"
              name="signup"
              active={activeItem === "signup"}
              onClick={this.handleItemClick}
            />  
        </Menu>
    );
  }
}
export default Navigation;
