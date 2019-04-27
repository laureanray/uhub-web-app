import React, { Component } from "react";

class LogoutPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillUnmount() {
    console.log("component wil unmount here.");
  }

  render() {
    return <div>Logging Out...</div>;
  }
}

export default LogoutPage;
