import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/login/index";
import "./styles/index.css";
import Dispositivo from "./views/dispositivos/Dispositivos";
import PrivateRoute from "./components/PrivateRoute";

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        {/* <Route path='/dispositivo' component={Dispositivo} /> */}
      </Switch>
      <PrivateRoute exact path="/dispositivo" component={Dispositivo} />
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
