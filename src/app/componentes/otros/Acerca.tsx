import bib from "../../../assets/img/bibliotec.jpg"

export const Acerca = () => {
    return (
      <div className="container py-5">
        <h1 className="text-center fw-light mb-4">Acerca de Nosotros</h1>
        <div className="row align-items-center">
          <div className="col-md-6">
          <img src={bib} alt="Portada del libro" className="card-img-top" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-md-6">
            <p className="lead text-body-secondary">
              Bienvenidos a nuestra plataforma, un espacio dedicado a los amantes de la lectura. 
              Nuestro objetivo es fomentar el hábito de la lectura y ofrecer un lugar donde puedas descubrir, 
              gestionar y compartir tus libros favoritos.
            </p>
            <p>
              Aquí encontrarás una amplia variedad de libros cuidadosamente seleccionados, 
              desde clásicos literarios hasta los best-sellers más actuales. 
              También puedes agregar tus propias recomendaciones y formar parte de nuestra comunidad literaria.
            </p>
            <p>
              ¡Únete a nosotros y comparte la pasión por los libros! Creemos que cada libro tiene una historia 
              única que merece ser descubierta.
            </p>
          </div>
        </div>
      </div>
    );
  };
  