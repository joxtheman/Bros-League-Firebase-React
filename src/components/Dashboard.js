import React, { Component } from "react";
import fire from "../config/Fire";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <h1>You are at Dashboard</h1>
        <h2>Welcome user</h2>
        <p>You're currently logged in.</p>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
