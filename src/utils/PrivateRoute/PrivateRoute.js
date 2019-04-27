import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log();
  return (
    <Route
      {...rest}
      render={x =>
        rest.user.isAuthenticated === true ? (
          <Component {...x} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(PrivateRoute);
