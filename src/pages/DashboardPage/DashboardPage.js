import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class DashboardPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1> Welcome </h1>
        <Link to="/logout"> Logout </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(DashboardPage);
