const List = ({ type, registros }) => {
  if (type === "dispositivos") {
    return registros.map((data) => {
      return (
        <tr key={data.idDispositivo}>
          <td>{data.idDispositivo}</td>
          <td>{data.nombre_dispositivo}</td>
          <td>{data.descripcion}</td>
        </tr>
      );
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
  if (type === "invitados") {
    return registros.map((data) => {
      return (
        <tr key={data.idDispositivo}>
          <td>{data.idDispositivo}</td>
          <td>{data.nombre_dispositivo}</td>
          <td>{data.descripcion}</td>
        </tr>
      );
    });
  }
};

export default List;
