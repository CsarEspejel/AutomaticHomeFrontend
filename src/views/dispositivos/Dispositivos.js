import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/apis/apiDispositivos";
import List from "../../components/List";
import Header from "../../components/header/Header";
import CardDispositivos from "../../components/cardsDispositivos/cardDispositivos";
import "./dispositivos.css";

const Dispositivo = () => {
  const [registros, setRegistros] = useState(null);

  const fetchData = async () => {
    await api.getAllDispositivos().then((res) => {
      const result = res.data;
      setRegistros(result.data);
      // console.log(registros);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderRegistros = () => {
    if (!registros) {
      return (
        <tr>
          <td colSpan="4">Cargando registros...</td>
        </tr>
      );
    }

    if (registros.length === 0) {
      return (
        <tr>
          <td colSpan="4">No hay registros todavía</td>
        </tr>
      );
    }

    // return <List type="dispositivos" registros={registros} />;
    return <CardDispositivos type="dispositivos" registros={registros} />;
  };

  return (
    <>
      <Header />
      <div className="show-dispositivos">
        <Link to="/newDispositivo" className="btn btn-primary btn-addDisp">
          Agregar Dispositivo
        </Link>
        <div className="show-cards">{renderRegistros()}</div>
      </div>
    </>
  );
};

export default Dispositivo;
