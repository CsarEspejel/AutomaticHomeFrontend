import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/login/index";
import Register from "./views/register/index";
import "./styles/index.css";
import Dispositivo from "./views/dispositivos/Dispositivos";
import Inmueble from "./views/inmuebles/Inmuebles";
import PrivateRoute from "./components/PrivateRoute";
import AddDispositivo from "./views/dispositivos/addDispositivo";
import AddInmueble from "./views/inmuebles/addInmueble";

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <PrivateRoute exact path="/dispositivo" component={Dispositivo} />
      <PrivateRoute exact path="/newDispositivo" component={AddDispositivo} />
      <PrivateRoute exact path="/inmueble" component={Inmueble} />
      <PrivateRoute exact path="/newInmueble" component={AddInmueble} />
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
