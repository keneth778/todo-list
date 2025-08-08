export function informacion(tarea,onAddTareaClick) {
    let div = document.createElement('div');
    div.className = "div-informacion";

    // Botones superiores
    let divBotones = document.createElement('div');
    divBotones.className = "div-btn";

    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.innerText = "+ tarea";
    btnTarea.addEventListener('click', onAddTareaClick);
   

    let btnArchivados = document.createElement('button');
    btnArchivados.className = "btn-archivados";
    btnArchivados.innerText = "Archivados";

    divBotones.appendChild(btnTarea);
    divBotones.appendChild(btnArchivados);

    // Contenido de la tarjeta
    let divTexto = document.createElement('div');
    divTexto.className = "div-texto";

    let divEstado = document.createElement('div');
    divEstado.className = "estado";
    divEstado.innerText = tarea.estado;

    let titulo = document.createElement('h3');
    titulo.innerText = tarea.titulo;

    let parrafo = document.createElement('p');
    parrafo.innerText = tarea.descripcion;

    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "div-integrantes";

    let labelIntegrantes = document.createElement('p');
    labelIntegrantes.innerText = "Integrantes";

    let divAsignaciones = document.createElement('div');
    divAsignaciones.className = "div-asignaciones";

    // Usar las caritas del array de tarea
    tarea.integrantes.forEach(emoji => {
        let span = document.createElement('span');
        span.className = "emoji-integrante";
        span.innerText = emoji;
        divAsignaciones.appendChild(span);
    });

    divIntegrantes.appendChild(labelIntegrantes);
    divIntegrantes.appendChild(divAsignaciones);

    // Ensamblar todo dentro de divTexto
    divTexto.appendChild(divEstado);
    divTexto.appendChild(titulo);
    divTexto.appendChild(parrafo);
    divTexto.appendChild(divIntegrantes);

    // Agregar botones y tarjeta al contenedor principal
    div.appendChild(divBotones);
    div.appendChild(divTexto);

    return div;
}