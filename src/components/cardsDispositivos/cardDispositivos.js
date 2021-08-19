import { React, useState } from "react";
import ButtonAction from "../buttonAction/buttonAction";
import "./cardDispositivos.css";

const CardDispositivos = ({ type, registros }) => {
  if (type === "dispositivos") {
    return registros.map((data) => {
      var icon = "";
      if (data.nombre_dispositivo.toLowerCase() === "luces") {
        icon = "far fa-lightbulb";
      } else if (data.nombre_dispositivo.toLowerCase() === "sensor") {
        icon = "fas fa-magnet";
      } else if (data.nombre_dispositivo.toLowerCase() === "puerta") {
        icon = "fas fa-door-closed";
      } else if (data.nombre_dispositivo.toLowerCase() === "ventanas") {
        icon = "fas fa-columns";
      }
      return (
        <div className="card-disp" key={data.idDispositivo}>
          <h4 className="card-disp-title">
            {data.nombre_dispositivo} <i className={icon}></i>
          </h4>
          <div className="card-disp-body">
            <p className="card-disp-description">{data.descripcion}</p>
            <p className="buttonAction">
              <ButtonAction />
            </p>
          </div>
        </div>
      );
      //   return (
      //     <tr key={data.idDispositivo}>
      //       <td>{data.idDispositivo}</td>
      //       <td>{data.nombre_dispositivo}</td>
      //       <td>{data.descripcion}</td>
      //     </tr>
      //   );
    });
  }
  if (type === "inmuebles") {
    return registros.map((data) => {
      return (
        <tr key={data.idInmueble}>
          <td>{data.idInmueble}</td>
          <td>{data.nombre_inmueble}</td>
          <td>{data.direccion}</td>
        </tr>
      );
    });
  }
};

export default CardDispositivos;
