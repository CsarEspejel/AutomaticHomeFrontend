import React, { useState } from "react";
import propTypes from "prop-types";
import { Redirect } from "react-router-dom";
import "./register.css";
import AuthService from "../../services/AuthService";
import Auth from "../../services/Auth";
import url from "../../services/urlService";

const Register = () => {
  const [rol, setRol] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const numeros = (e) => {
    //Solo numeros
    var out = "";
    var filtro = "1234567890"; //Caracteres validos

    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos
    for (var i = 0; i < e.target.value.length; i++)
      if (filtro.indexOf(e.target.value.charAt(i)) !== -1)
        //Se añaden a la salida los caracteres validos
        out += e.target.value.charAt(i);

    //Retornar valor filtrado
    return out;
  };

  const changeState = (e) => {
    if (e.target.name === "rol") {
      setRol(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const credenciales = {
        rol: rol,
        name: name,
        email: email,
        password: password,
        phone: phone,
      };

      Register.propTypes = {
        rol: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        email: propTypes.string.isRequired,
        password: propTypes.string.isRequired,
        phone: propTypes.number.isRequired,
      };

      var response = await AuthService.doRegister(credenciales);

      if (response.success) {
        console.log("Se ha guardado con exito broooooo");
        setMessage(response.success);
        window.location = url.BASE_URL + "login";
      } else {
        throw new Error(response);
      }
    } catch (error) {
      console.log(error.message);
      setMessage(message);
    }
  };

  if (Auth.isAuthenticated() === false) {
    return (
      <div>
        <h1>Automatic Home</h1>
        <div className="container login">
          <div className="card text-center">
            <div className="card-header">Registrate</div>
            <div className="card-body">
              <form action="" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="rol">Rol</label>
                  <select
                    className="form-control"
                    name="rol"
                    id="rol"
                    onChange={changeState}
                  >
                    <option selected value="">
                      Seleciona una opción
                    </option>
                    <option value="1">Administrador</option>
                    <option value="2">Invitado</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    onChange={changeState}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    placeholder="correo@correo.com"
                    onChange={changeState}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    minLength="8"
                    onChange={changeState}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                    minLength="10"
                    aria-describedby="phoneHelp"
                    placeholder="Ingresa 10 números sino no funciono xd"
                    onChange={changeState}
                  />
                  <small id="phoneHelp" className="form-text text-muted">
                    Son 10 digitos
                  </small>
                </div>
                <span id="error">{message}</span>
                <br />
                <button type="submit" className="btn btn-primary">
                  Crear usuario
                </button>
              </form>
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
export default Register;
