import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loginUser,
  authenticatedUser,
  loginFailedUser
} from "../../actions/user.action";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "./LoginPage.sass";

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentWillUnmount() {
    console.log("unmounting");
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
          this.props.history.push("/login");
        } else {
        }
      })
      .catch(error => {
        console.log(error.message);
        if (error.message === "Network Error") {
          console.log("server not responding");
          this.props.dispatch(loginFailedUser("NETWORK_ERROR"));
        } else if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (error.response.data.message === "USER_DOESNT_EXIST") {
            this.props.dispatch(loginFailedUser("USER_DOESNT_EXIST"));
          } else if (error.response.data.message === "WRONG_PASSWORD") {
            this.props.dispatch(loginFailedUser("WRONG_PASSWORD"));
          }
        } else {
          this.props.dispatch(loginFailedUser("UKNOWN_ERROR"));
        }
      });
  }

  render() {
    return (
      <div>
        <div className="card">
          <h2> Login </h2>
          {this.props.user.status === "AUTH_FAILED" ? (
            <p> Error: {this.props.user.error}</p>
          ) : (
            ""
          )}
          <form className="form" onSubmit={this.handleOnSubmit}>
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
            {this.props.user.status === "LOGGING_IN" ? (
              <button className="button button-primary disabled">
                {" "}
                Logging In{" "}
              </button>
            ) : (
              <button className="button button-primary"> Login </button>
            )}
          </form>
        </div>

        {this.props.user.isAuthenticated === true ? (
          <Redirect to="/dashboard" />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(LoginPage);
