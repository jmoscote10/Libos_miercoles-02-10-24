import { useState } from "react";
import { ARREGLO_LIBRO } from "../../mocks/Libro-mocks";
import { Libro } from "../../modelos/Libro";
import { ARREGLO_LIBROGenero } from "../../utilidades/dominios/DomGenero";

export const Libro_Admin = () => {
  const [arrLibro] = useState<Libro[]>(ARREGLO_LIBRO);

  const obtenerNombre = (valor: string) => {
    for (const objGen of ARREGLO_LIBROGenero)
      if (objGen.codGenero == valor) return objGen.nombreGenero;
  };

  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-dark">
            <thead>
              <tr>
                <th style={{ width: "10" }}>Crear Nuevo Libro:</th>
              </tr>
              <tr>
                <th style={{ width: "10" }}>No.</th>
                <th style={{ width: "50" }}>Título de libro</th>
                <th style={{ width: "30" }}>Autor</th>
                <th style={{ width: "25" }} className="text-center">
                  ISBN
                </th>
                <th style={{ width: "15" }} className="text-center">
                  Género
                </th>
                <th style={{ width: "20" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {arrLibro.map((miLib: Libro) => (
                <tr>
                  <td>{miLib.codLibro}</td>
                  <td>{miLib.tituloLibro}</td>
                  <td>{miLib.autorLibro}</td>
                  <td className="text-center">{miLib.codGeneroLibro}</td>
                  <td className="text-center">
                    {obtenerNombre(miLib.codGeneroLibro)}
                  </td>
                  <td>
                    <a href="/Libact/1">
                      <i
                        className="fa-solid fa-pen-to-square"
                        style={{ color: "#0000ff" }}
                      ></i>
                    </a>
                    &nbsp;
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "#0000ff" }}
                      ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
