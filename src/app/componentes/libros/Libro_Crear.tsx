import { ARREGLO_LIBROGenero } from "../../utilidades/dominios/DomGenero";
export const Libro_Crear = () => {
  return ( 
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6">
              <label htmlFor="nomb" className="form-label">
                Título del libro
              </label>
              <input
                type="text"
                className="form-control"
                id="nomb"
                name="nomb"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="auto" className="form-label">
                Autor
              </label>
              <input
                type="text"
                className="form-control"
                id="auto"
                name="auto"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="ISBN" className="form-label">
                ISBN
              </label>
              <input
                type="text"
                className="form-control"
                id="ISBN"
                name="ISBN"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="edit" className="form-label">
                Género
              </label>
              <select className="form-select" id="edit" name="edit" required>
                <option selected disabled value="">
                  Seleccione el Género
                </option>
                {ARREGLO_LIBROGenero.map((genero) => (
                  <option>
                   Opción {genero.codGenero}: {genero.nombreGenero}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Registrar Libro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
