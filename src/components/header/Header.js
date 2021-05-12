import React from "react";
import { Link } from "react-router-dom";
import url from "../../services/urlService";
import AuthService from "../../services/AuthService";
import "./header.css";

const Header = () => {
  const logout = async (e) => {
    e.preventDefault();
    try {
      var response = await AuthService.doLogout();
      if (response) {
        alert(response.message);
        window.location = url.BASE_URL + "login";
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Automatic Home</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="dispositivo">
                Dispositivos <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="inmueble">
                Inmuebles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contacto">
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={logout}>
                Cerrar Sesion
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
