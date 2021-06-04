import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/apis/apiDispositivos";
import List from "../../components/List";
import Header from "../../components/header/Header";

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

    return <List type="dispositivos" registros={registros} />;
  };

  return (
    <div>
      <Header />
      <Link to="/newDispositivo" className="btn btn-primary">
        Agregar Dispositivo
      </Link>
      <div className="table-responsive">
        <table className="table table-stripped mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre Dispositivo</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderRegistros()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Dispositivo;
