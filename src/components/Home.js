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
          <p>
            Soccer is more than sport.<span> IT'S PASSION.</span>
          </p>
          <p>
            You don't watch soccer.<span> YOU LIVE IT</span>
          </p>
          <p>
            Soccer is a <span>GAME:</span>
          </p>
          <p>
            of <span> STRATEGY, STRENGT</span> and<span> SKILS.</span>
          </p>

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
