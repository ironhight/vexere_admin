import React, { Component } from "react";
import Authenticate from "../../HOC/Authenticate";

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>My Profile</h1>
      </div>
    );
  }
}

export default Authenticate(Profile);
