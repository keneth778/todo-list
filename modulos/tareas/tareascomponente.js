// tareas.js (o donde lo estés usando)
import { itemTarea } from "../../componentes/itemtarea/itemtarea.js";

export function tareas(tareasDb) {
    let div = document.createElement('div');
    div.className = "div-tareas";

    tareasDb.forEach((e, i) => {
        div.appendChild(itemTarea(
            i + 1,           // índice de la tarea (1, 2, 3...)
            e.titulo,        // título
            e.estado,        // estado
            e.fechaAs,       // fecha de asignación
            e.fechaEn,       // fecha de entrega
            e.integrantes          // lista de integrantes
        ));
    });

    return div;
}
