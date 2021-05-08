import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../services/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // <Route
  //     {...rest}
  //     render = {props =>
  //         auth.isAuthenticated === true ? (
  //             <Component {...props} />
  //         ) : (
  //             <Redirect to="/login" />
  //         )
  //     }
  // />
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
