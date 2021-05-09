import React, { useState } from "react";
import Header from "../../components/header/Header";
import { Link, useHistory, Redirect, withRouter } from "react-router-dom";
import "./login.css";
import AuthService from "../../services/AuthService";
import Auth from "../../services/Auth";

const Login = (props) => {
  const [username, changeUsername] = useState("");
  const [password, changePassword] = useState("");

  // const history = useHistory();

  const changeState = (e) => {
    if (e.target.name === "email") {
      changeUsername(e.target.value);
    } else if (e.target.name === "password") {
      changePassword(e.target.value);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      AuthService.doLogout();
    } catch (error) {
      console.log("error", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const credenciales = {
      email: username,
      password: password,
    };

    var response = await AuthService.doLogin(credenciales);
    console.log(response);
    if (response) {
      AuthService.handleLogin(response);
      props.history.replace("/dispositivo");
      // <Redirect to="/dispositivo" />;
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  if (Auth.authenticated === false) {
    return (
      <div>
        <Header />
        <div className="container login">
          <div className="card text-center">
            <div className="card-header">Iniciar Sesión</div>
            <div className="card-body">
              <form action="" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    onChange={changeState}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    También puedes usar tu nombre de usuario
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={changeState}
                  />
                </div>
                <Link to="/createUser" className="btn btn-secondary">
                  Crear Usuario
                </Link>
                <button type="submit" className="btn btn-primary">
                  Entremos
                </button>
                <button onClick={logout}>Cerrar pana</button>
              </form>
            </div>
            <div className="card-footer text-muted">
              Vamo a armar algo chido
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Redirect to={"/dispositivo"} />;
      </div>
    );
  }
};

export default withRouter(Login);
