export function formulario() {
    let form = document.createElement('form');
    form.className = "formulario-tarea";

    // Título de la tarea
    let divTitulo = document.createElement('div');
    divTitulo.className = "form-group";
    
    let labelTitulo = document.createElement('label');
    labelTitulo.textContent = "Título de la tarea";
    labelTitulo.htmlFor = "titulo";
    
    let inputTitulo = document.createElement('input');
    inputTitulo.type = "text";
    inputTitulo.id = "titulo";
    inputTitulo.name = "titulo";
    inputTitulo.required = true;
    inputTitulo.placeholder = "Ingrese el título de la tarea";
    
    divTitulo.appendChild(labelTitulo);
    divTitulo.appendChild(inputTitulo);

    // Descripción de la tarea
    let divDescripcion = document.createElement('div');
    divDescripcion.className = "form-group";
    
    let labelDescripcion = document.createElement('label');
    labelDescripcion.textContent = "Descripción";
    labelDescripcion.htmlFor = "descripcion";
    
    let textareaDescripcion = document.createElement('textarea');
    textareaDescripcion.id = "descripcion";
    textareaDescripcion.name = "descripcion";
    textareaDescripcion.rows = "3";
    textareaDescripcion.placeholder = "Ingrese la descripción de la tarea";
    
    divDescripcion.appendChild(labelDescripcion);
    divDescripcion.appendChild(textareaDescripcion);

    // Fecha de entrega
    let divFechaEntrega = document.createElement('div');
    divFechaEntrega.className = "form-group";
    
    let labelFechaEntrega = document.createElement('label');
    labelFechaEntrega.textContent = "Fecha de entrega";
    labelFechaEntrega.htmlFor = "fecha-entrega";
    
    let inputFechaEntrega = document.createElement('input');
    inputFechaEntrega.type = "date";
    inputFechaEntrega.id = "fecha-entrega";
    inputFechaEntrega.name = "fecha-entrega";
    inputFechaEntrega.required = true;
    
    divFechaEntrega.appendChild(labelFechaEntrega);
    divFechaEntrega.appendChild(inputFechaEntrega);

    // Botón de enviar
    let divBoton = document.createElement('div');
    divBoton.className = "form-group";
    
    let botonEnviar = document.createElement('button');
    botonEnviar.type = "submit";
    botonEnviar.textContent = "Agregar Tarea";
    botonEnviar.className = "btn-enviar";
    
    divBoton.appendChild(botonEnviar);

    // Agregar todos los elementos al formulario
    form.appendChild(divTitulo);
    form.appendChild(divDescripcion);  // Nuevo campo agregado
    form.appendChild(divFechaEntrega);
    form.appendChild(divBoton);

    // Manejar el envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener la fecha actual (asignación)
        const fechaAsignacion = new Date().toISOString().split('T')[0];
        
        // Obtener valores del formulario
        const titulo = form.elements['titulo'].value;
        const descripcion = form.elements['descripcion'].value;  // Nuevo valor
        const fechaEntrega = form.elements['fecha-entrega'].value;
        
        // Crear objeto de tarea
        const nuevaTarea = {
            titulo: titulo,
            estado: "Pendiente",
            descripcion: descripcion,  // Ahora incluye la descripción
            fechaAs: fechaAsignacion,
            fechaEn: fechaEntrega,
            integrantes: []
        };
        
        // Mostrar en consola
        console.log("Nueva tarea creada:", nuevaTarea);
        
        // Resetear formulario
        form.reset();
    });

    return form;
}