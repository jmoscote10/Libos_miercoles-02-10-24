export const Libro_Listar = () => {
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
                <th style={{width: "10"}} className="text-center">ISBN</th>
                <th style={{width: "15"}}>Editorial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Cien años de soledad</td>
                <td>Gabriel Garcia Marquez</td>
                <td className="text-center">7788888888</td>
                <td>Sudamericana</td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>La casa de los espiritus</td>
                <td>Isabella Allende</td>
                <td className="text-center">7888888888</td>
                <td>Rama</td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>El tunel</td>
                <td>Ernesto Sabato</td>
                <td className="text-center">9892323238</td>
                <td>Planeta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
