import { header } from "../modulos/header/headercomponentes.js";
import { footer } from "../modulos/footer/footercomponente.js";
import { informacion } from "../modulos/informacion/informacioncomponente.js";
import { tareas } from "../modulos/tareas/tareascomponente.js";
import { formulario } from "../modulos/formulario/formulario.js";

export async function dashboard() {
    let tareasDb = []; // Base de datos simulada de tareas
    
    try {
        const resultado = await fetch("https://todo-list-backend-r9lf.onrender.com/tareas");
        
        // Verificar si la respuesta es exitosa
        if (resultado.ok) {
            const datos = await resultado.json();
            console.log("Datos recibidos:", datos);
            tareasDb = datos; // Asignar los datos obtenidos
        } else {
            console.warn(`Error ${resultado.status}: No se pudieron cargar las tareas desde el servidor`);
            // Usar datos por defecto o base de datos simulada vacía
        }
        
    } catch (error) {
        console.error("Error al conectar con el servidor:", error);
        console.log("Usando base de datos simulada local");
        // Datos de ejemplo para probar si el servidor no responde
        tareasDb = [
            {
                id: 1, 
                titulo: "Tarea de ejemplo", 
                descripcion: "Descripción de ejemplo",
                estado: "pendiente",
                fecha_asignada: "2023-05-15",
                fecha_entrega: "2023-05-30",
                integrantes: ["😊", "👨‍💻"]
            }
        ];
    }
    
    // Crear el elemento dashboard
    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";
    
    // Contenedor para el formulario (inicialmente vacío)
    let formularioContainer = document.createElement('div');
    formularioContainer.className = "formulario-container";
    formularioContainer.style.display = "none";  // Oculto inicialmente
    
    // Función para mostrar/ocultar el formulario
    const toggleFormulario = () => {
        if (formularioContainer.style.display === "none") {
            formularioContainer.style.display = "block";
            // Si no tiene hijos, agregar el formulario
            if (formularioContainer.children.length === 0) {
                formularioContainer.appendChild(formulario());
            }
        } else {
            formularioContainer.style.display = "none";
        }
    };
    
    // Construir el dashboard
    dashboard.appendChild(header());
    dashboard.appendChild(formularioContainer);
    
    // Sección principal
    let seccion1 = document.createElement('section');
    seccion1.className = "seccion-1";
    seccion1.appendChild(tareas(tareasDb));
    
    // Pasar la primera tarea al componente informacion si existe
    if (tareasDb.length > 0) {
        // Mapear los nombres de propiedades de la base de datos a lo que espera el componente
        const primeraTarea = {
            titulo: tareasDb[0].titulo || tareasDb[0].nombre || tareasDb[0].title || "Sin título",
            descripcion: tareasDb[0].descripcion || tareasDb[0].description || "Sin descripción",
            estado: tareasDb[0].estado || tareasDb[0].estado_tarea || "Sin estado",
            integrantes: tareasDb[0].integrantes || []
        };
        seccion1.appendChild(informacion(primeraTarea, toggleFormulario));
    } else {
        // Mostrar un mensaje si no hay tareas
        const mensaje = document.createElement('p');
        mensaje.textContent = 'No hay tareas para mostrar';
        mensaje.className = 'mensaje-vacio';
        seccion1.appendChild(mensaje);
    }
    
    dashboard.appendChild(seccion1);
    dashboard.appendChild(footer());
    
    return dashboard;
}

// Llamada corregida
dashboard().then(elemento => {
    document.body.appendChild(elemento);
}).catch(error => {
    console.error("Error al crear el dashboard:", error);
});