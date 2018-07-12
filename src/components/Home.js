import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import { Button, Segment } from "semantic-ui-react";
import "../css/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homeIntro">
          <div className="doYouDare">
            <Link to="/portal">
              <Button inverted color="red">
                <span> DO YOU DARE TO ENTER?</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
