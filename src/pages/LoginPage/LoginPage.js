import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser, authenticatedUser } from "../../actions/user.action";

import axios from "axios";

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnSubmit(event) {
    event.preventDefault();
    let email, password;

    [email, password] = Object.keys(event.target.elements).map(key => {
      return event.target.elements[key].value;
    });

    // Send http request to the backend

    this.props.dispatch(loginUser({ email, password }));

    axios({
      method: "POST",
      url: "http://localhost/user/login",
      data: {
        email,
        password
      }
    })
      .then(response => {
        if (response.data.message === "AUTH_SUCCESS") {
          this.props.dispatch(authenticatedUser(response.data.token));
        }
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  }

  render() {
    return (
      <div>
        <p> Status: </p>
        <p>{this.props.user.status} </p>
        <p>{this.props.user.token && <p> {this.props.user.token}</p>}</p>
        <form action="" onSubmit={this.handleOnSubmit}>
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button type="submit"> Login </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(LoginPage);
