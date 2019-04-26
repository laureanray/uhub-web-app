import React, { Component } from "react";
import axios from "axios";
import "./SignUpPage.sass";

class SignUpPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      errors: []
    };
  }

  onSubmit(event) {
    event.preventDefault();
    let firstName, lastName, email, mobile, password, confirm;

    [firstName, lastName, email, mobile, password, confirm] = Object.keys(
      event.target.elements
    ).map(key => {
      return event.target.elements[key].value;
    });

    // Send http request to the backend

    axios({
      method: "POST",
      url: "http://localhost/user/signup",
      data: {
        name: {
          firstName,
          lastName
        },
        email,
        mobile,
        private: {
          password
        }
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  }

  render() {
    let errorTexts;
    if (this.state.errors.length !== 0) {
      errorTexts = this.state.errors.map(error => (
        <p className="errorText"> {error} </p>
      ));
    }
    return (
      <div className="SignUpPage">
        <form
          method="POST"
          onSubmit={e => {
            this.onSubmit(e);
          }}
        >
          <h3> Sign Up</h3>
          {errorTexts}
          <div className="row">
            <input type="text" name="" placeholder="First Name" id="" />
            <input type="text" name="" placeholder="Last Name" id="" />
          </div>
          <input type="text" name="email" placeholder="Email" />
          <input type="number" name="mobile" placeholder="Mobile" />
          <input type="password" name="password" placeholder="Password" />
          <input
            type="password"
            name="password_confirm"
            placeholder="Confirm"
          />
          <button type="submit"> Submit </button>
          <footer>
            <p> Copyright &copy; 2019</p>
          </footer>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
