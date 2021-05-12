import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/header/Header";
import api from "../../services/apis/apiInmuebles";

const AddInmueble = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    await api.addInmueble(data).then((res) => {
      const result = res.data;
      setMessage(result.success);
      console.log(result);
    });

    console.log(data);
  };

  return (
    <Fragment>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="card text-center">
          <div className="card-header">
            <h1>Agregar Dispositivo</h1>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="nombre_inmueble">Nombre del inmueble</label>
                <input
                  className="form-control"
                  {...register("nombre_inmueble", {
                    required: true,
                    maxLength: 25,
                  })}
                />
                <span>
                  {errors.nombre_inmueble?.type === "required" &&
                    "El nombre del dispositivo es requerido"}
                  {errors.nombre_inmueble?.type === "maxLength" &&
                    "Maximo 25 caracteres"}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Direccion</label>
                <input
                  className="form-control"
                  {...register("direccion", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                <span>
                  {errors.direccion?.type === "required" &&
                    "La direccion es obligatoria"}
                  {errors.descripcion?.type === "maxLength" &&
                    "Maximo 50 caracteres"}
                </span>
              </div>
              <button type="submit" className="btn btn primary">
                Enviar
              </button>
            </form>
            <span> {message} </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddInmueble;
