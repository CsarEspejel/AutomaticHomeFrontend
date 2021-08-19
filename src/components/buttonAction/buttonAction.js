import React, { useState } from "react";
import "./buttonAction.css";

const ButtonAction = () => {
  const [valor, setValor] = useState(false);
  const [name, setName] = useState("Activar");

  const changeState = (e) => {
    if (valor === false) {
      setName("Desactivar");
      setValor(!valor);
    } else {
      setName("Activar");
      setValor(!valor);
    }
    console.log(valor);
  };

  return (
    <>
      <button
        type="button"
        id="toggle"
        className="toggle--button"
        onClick={changeState}
        value={valor}
      >
        {name}
      </button>
    </>
  );
};

export default ButtonAction;
