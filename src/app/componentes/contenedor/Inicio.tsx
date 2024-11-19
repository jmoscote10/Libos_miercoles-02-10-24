import { NavLink } from "react-router-dom";
import estaimg from "../../../assets/img/este.jpg"
import siuu from "../../../assets/img/siuu.jpg"
import otra from "../../../assets/img/otra.jpg"

export const Inicio = () => {
  return (
    <>
      <br />
      <br />
      <div>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Colección de Libros</h1>
              <p className="lead text-body-secondary">
                Explora nuestra colección de libros cuidadosamente seleccionados: 
                una variedad de géneros y temas para todos los gustos y edades.
                Cada libro cuenta una historia única, esperando ser descubierta.
              </p>
              <p>
                <NavLink to="/acer" className="btn btn-primary my-2">
                 Explorar Libros
                </NavLink>
                <NavLink to="/Libcre" className="btn btn-secondary my-2">
                 Agregar Nuevo Libro
                </NavLink>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                <img src={estaimg} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
                  <div className="card-body">
                    <p className="card-text">
                    Una familia se muda a un hotel aislado. Descubre detalles únicos y
                    déjate cautivar por cada página llena de terror y suspense sobrenatural.
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
                          to="/Libact/123" 
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Editar
                        </NavLink>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img src={siuu} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
                  <div className="card-body">
                    <p className="card-text">
                    Sumérgete en esta obra que narra la lucha interna de un joven tras cometer un crimen. 
                    Cada página te atrapará con su profunda exploración de la culpa y la redención.

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
                          to="/Libact/123" 
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Editar
                        </NavLink>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                <img src={otra} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
                  <div className="card-body">
                    <p className="card-text">
                    Adéntrate en una noche mágica en Tokio, llena de personajes fascinantes y situaciones surrealistas. 
                    Déjate llevar por cada página y descubre los misterios de la vida nocturna.
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
                        to="/Libact/123" 
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Editar
                      </NavLink>
                    </div>
                      <small className="text-body-secondary">9 mins</small>
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
