import { NavLink } from "react-router-dom";

import estaimg from "../../../assets/img/este.jpg"
import siuu from "../../../assets/img/siuu.jpg"
import otra from "../../../assets/img/otra.jpg"
import hs from "../../../assets/img/hs.jpg"
import gm from "../../../assets/img/gm1.jpg"
import ros from "../../../assets/img/ros.jpg"
               
export const Libro_Actualizar = () => {
  
  return (
    <>
    <div>
      <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                  <img src={estaimg} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
                    <div className="card-body">
                      <p className="card-text">
                      Jack Torrance se convierte en cuidador de un hotel aislado,
                      que lo influencia de manera siniestra, poniendo en peligro a su familia.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <NavLink
                          to="/acer" 
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Ver
                        </NavLink>
                          <NavLink
                            to="/Libcre" 
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Actualizar Info
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                  <img src={siuu} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
                    <div className="card-body">
                      <p className="card-text">
                      Sigue a Raskólnikov, 
                      quien lucha con la culpa tras cometer un asesinato, 
                      explorando la psicología del crimen.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <NavLink
                          to="/acer" 
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Ver
                        </NavLink>
                          <NavLink
                            to="/Libcre" 
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Actualizar Info
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                  <img src={otra} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
                    <div className="card-body">
                      <p className="card-text">
                      Narra eventos cruciales tras una noche decisiva, 
                      enfocándose en la búsqueda de redención y perdón.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                      <NavLink
                        to="/acer" 
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Ver
                      </NavLink>
                        <NavLink
                          to="/Libcre" 
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Actualizar Info
                        </NavLink>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div className="col">
                  <div className="card shadow-sm">
                  <img src={hs} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
                    <div className="card-body">
                      <p className="card-text">
                      Cuento de hadas donde dos hermanos deben escapar de una bruja en una casa de dulces en el bosque.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <NavLink
                          to="/acer" 
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Ver
                        </NavLink>
                          <NavLink
                            to="/Libcre" 
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Actualizar Info
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                  <img src={gm} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
                    <div className="card-body">
                      <p className="card-text">
                      Explora historias de amor en un entorno vibrante,
                      resaltando cómo el amor florece en diversas circunstancias.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <NavLink
                          to="/acer" 
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Ver
                        </NavLink>
                          <NavLink
                            to="/Libcre" 
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Actualizar Info
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                  <img src={ros} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
                    <div className="card-body">
                      <p className="card-text">
                      Misterio medieval donde un franciscano investiga asesinatos en un monasterio, 
                      enfrentando a la Inquisición.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                      <NavLink
                        to="/acer" 
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Ver
                      </NavLink>
                        <NavLink
                          to="/Libcre" 
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Actualizar Info
                        </NavLink>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </>

  );
};


