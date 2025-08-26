import { itemTarea } from "../../componentes/itemtarea/itemtarea.js";

export function tareas(tareasDb) {
    let div = document.createElement('div');
    div.className = "div-tareas";
    
    // Verificar que tareasDb existe y tiene elementos
    if (!tareasDb || !Array.isArray(tareasDb) || tareasDb.length === 0) {
        let mensajeVacio = document.createElement('p');
        mensajeVacio.textContent = 'No hay tareas disponibles';
        mensajeVacio.className = 'mensaje-vacio';
        div.appendChild(mensajeVacio);
        return div;
    }
    
    tareasDb.forEach((e, i) => {
        // Debug: verificar la estructura de cada tarea
        console.log('Procesando tarea:', e);
        
        try {
            div.appendChild(itemTarea(
                i + 1, // índice de la tarea (1, 2, 3...)
                e.nombre || e.titulo || e.title, // título (verificar diferentes nombres de propiedad)
                e.estado_tarea || e.estado, // estado
                e.fecha_asignada || e.fechaAsignada, // fecha de asignación
                e.fecha_entrega || e.fechaEntrega, // fecha de entrega
                e.integrantes || [] // lista de integrantes - SI ES NULL, USAR ARRAY VACÍO
            ));
        } catch (error) {
            console.error('Error al crear tarea:', error);
            console.log('Datos de la tarea que causó error:', e);
        }
    });
    
    return div;
}