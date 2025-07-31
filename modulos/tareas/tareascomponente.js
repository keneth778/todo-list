// tareas.js (o donde lo estés usando)
import { tarea } from "../../componentes/itemtarea/itemtarea.js";

let tareasDB = [
  { titulo: "Configurar servidor", estado: "completado", fechaAs: "17/05/2025", fechaEn: "30/07/2025" },
  { titulo: "Escribir documentación", estado: "pendiente", fechaAs: "01/06/2025", fechaEn: "10/08/2025" },
  { titulo: "Revisar código", estado: "completado", fechaAs: "05/06/2025", fechaEn: "20/07/2025" }
];

export function tareas() {
  const contenedor = document.createElement('div');
  contenedor.className = "div-tareas";

  tareasDB.forEach((e, i) => {
    contenedor.appendChild(tarea(i + 1, e.titulo, e.estado, e.fechaAs, e.fechaEn));
  });

  return contenedor;
}
