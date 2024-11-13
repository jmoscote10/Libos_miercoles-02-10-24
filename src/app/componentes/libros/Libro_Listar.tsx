import { useState } from "react";

import { Libro } from "../../modelos/Libro";
import { ARREGLO_LIBRO } from "../../mocks/Libro-mocks";
import { ARREGLO_LIBROGenero } from "../../utilidades/dominios/DomGenero";

export const Libro_Listar = () => {
  const [arrLibro] = useState<Libro[]>(ARREGLO_LIBRO);

  const obtenerNombre = (valor: string)=>{
    for(const objGen of ARREGLO_LIBROGenero)
      if (objGen.codGenero == valor)
        return objGen.nombreGenero;
  }

  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-primary">
            <thead>
              <tr>
                <th style={{width: "10"}}>No.</th>
                <th style={{width: "50"}}>Título de libro</th>
                <th style={{width: "30"}}>Autor</th>
                <th style={{width: "10"}} className="text-center">Género</th>
                <th style={{width: "15"}}>Imagen</th>
              </tr>
            </thead>
            <tbody>

              {arrLibro.map((miLib: Libro)=>(
              <tr>
              <td>{miLib.codLibro}</td>
              <td>{miLib.tituloLibro}</td>
              <td>{miLib.autorLibro}</td>
              <td className="text-center">{obtenerNombre(miLib.codGeneroLibro)}</td>
              <td>
                <tr key={miLib.codLibro} className="align-middle"/>
                <img src={miLib.imagenLibroBase64} alt="La imagen" className="imagenListado"/>
                <br />
                {miLib.imagenLibro}</td>
              </tr>
              ))}


            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
