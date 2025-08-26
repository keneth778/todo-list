export function itemTarea(indice, titulo, estado, fechaAs, fechaEn, lista) {
    let div = document.createElement('div');
    div.className = "tarea-item"; // clase general del contenedor
    
    // número
    let divNumero = document.createElement('div');
    divNumero.className = "div-numero";
    divNumero.textContent = indice;
    div.appendChild(divNumero);
    
    // título
    let h3Titulo = document.createElement('h3');
    h3Titulo.className = "tarea-titulo";
    h3Titulo.textContent = titulo || 'Sin título';
    div.appendChild(h3Titulo);
    
    // estado
    let divEstado = document.createElement('div');
    divEstado.className = "tarea-estado";
    divEstado.textContent = estado || 'Sin estado';
    div.appendChild(divEstado);
    
    // fecha asignación
    let spanFechaAs = document.createElement('span');
    spanFechaAs.className = "tarea-fecha-asignacion";
    spanFechaAs.textContent = "Asignada: " + (fechaAs || 'No asignada');
    div.appendChild(spanFechaAs);
    
    // fecha entrega
    let spanFechaEn = document.createElement('span');
    spanFechaEn.className = "tarea-fecha-entrega";
    spanFechaEn.textContent = "Entrega: " + (fechaEn || 'No definida');
    div.appendChild(spanFechaEn);
    
    // lista de integrantes - AQUÍ ESTÁ LA CORRECCIÓN
    let divLista = document.createElement('div');
    divLista.className = "tarea-integrantes";
    
    // Verificar que lista existe y es un array
    if (lista && Array.isArray(lista) && lista.length > 0) {
        lista.forEach(nombre => {
            let p = document.createElement('p');
            p.textContent = nombre;
            divLista.appendChild(p);
        });
    } else {
        // Si no hay integrantes, mostrar un mensaje
        let p = document.createElement('p');
        p.textContent = 'Sin integrantes asignados';
        p.style.fontStyle = 'italic';
        p.style.color = '#666';
        divLista.appendChild(p);
    }
    
    div.appendChild(divLista);
    
    // botón eliminar tarea
    let divEliminar = document.createElement('div');
    divEliminar.className = "tarea-eliminar";
    divEliminar.textContent = "🗑";
    divEliminar.style.cursor = "pointer";
    // Puedes agregarle un event listener si deseas:
    // divEliminar.addEventListener('click', () => eliminarTarea(indice));
    div.appendChild(divEliminar);
    
    return div;
}