import { useState, useEffect } from "react";
import api from "../../services/apis/apiInmuebles";
import List from "../../components/List";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

const Dispositivo = () => {
  const [registros, setRegistros] = useState(null);

  const fetchData = async () => {
    await api.getAllInmuebles().then((res) => {
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

    return <List type="inmuebles" registros={registros} />;
  };

  return (
    <div>
      <Header />
      <Link to="/newInmueble" className="btn btn-primary">
        Agregar Inmueble
      </Link>
      <div className="table-responsive">
        <table className="table table-stripped mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre Inmueble</th>
              <th>Direcci[on</th>
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
