import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { Libro_Crear } from "../../componentes/libros/Libro_Crear";
import { Libro_Listar } from "../../componentes/libros/Libro_Listar";
import { Libro_Admin } from "../../componentes/libros/Libro_Admin";
import { Libro_Actualizar } from "../../componentes/libros/Libro_Actualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { No_encontrado } from "../../componentes/contenedor/No_encontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/Libcre" element={<Libro_Crear />} />
      <Route path="/Liblis" element={<Libro_Listar />} />
      <Route path="/Libadm" element={<Libro_Admin />} />

      <Route path="/Libact/:codigo" element={<Libro_Actualizar />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="" element={<No_encontrado />} />
    </Routes>
  );
};
