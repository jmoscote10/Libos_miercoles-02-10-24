export const Libro_Admin = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-dark">
            <thead>
              <tr>
                <th style={{ width: "10" }}>No.</th>
                <th style={{ width: "50" }}>Título de libro</th>
                <th style={{ width: "30" }}>Autor</th>
                <th style={{ width: "25" }} className="text-center">
                  ISBN
                </th>
                <th style={{ width: "15" }}>Editorial</th>
                <th style={{ width: "20" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Cien años de soledad</td>
                <td>Gabriel Garcia Marquez</td>
                <td className="text-center">7788888888</td>
                <td>Sudamericana</td>
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
              <tr>
                <td scope="row">2</td>
                <td>La casa de los espiritus</td>
                <td>Isabella Allende</td>
                <td className="text-center">7888888888</td>
                <td>Rama</td>
                <td>
                <a href="/Libact/2">
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
              <tr>
                <td scope="row">3</td>
                <td>El tunel</td>
                <td>Ernesto Sabato</td>
                <td className="text-center">9892323238</td>
                <td>Planeta</td>
                <td>
                <a href="/Libact/3">
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
