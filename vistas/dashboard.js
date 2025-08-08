import { header } from "../modulos/header/headercomponentes.js";
import { footer } from "../modulos/footer/footercomponente.js";
import { informacion } from "../modulos/informacion/informacioncomponente.js";
import { tareas } from "../modulos/tareas/tareascomponente.js";
import { formulario } from "../modulos/formulario/formulario.js";

export function dashboard(){



    // Base de datos simulada de tareas
let tareasDb = [
    {
        titulo: "Hola mundo",
        estado: "Pendiente",
        descripcion: "hacer tareas",
        fechaAs: "2025-07-28",
        fechaEn: "2025-08-05",
        integrantes: ["😎", "😚", "🙂‍↔️"]
    },
    {
        titulo: "Hola mundo",
        estado: "En progreso",
        descripcion: "hacer tareas",
        fechaAs: "2025-07-29",
        fechaEn: "2025-08-06",
        integrantes: ["😹", "😿"]
    },
    {
        titulo: "Hola mundo",
        estado: "Completada",
        descripcion: "hacer tareas",
        fechaAs: "2025-07-30",
        fechaEn: "2025-08-07",
        integrantes: ["🫩", "🤑", "🤡"]
    }
];

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

    //header
    dashboard.appendChild(header());

    // Agregar el contenedor del formulario
    dashboard.appendChild(formularioContainer);

    //section
    let seccion1 = document.createElement('section')
    seccion1.className = "seccion-1"
    seccion1.appendChild(tareas(tareasDb));
    // Pasamos la función toggleFormulario como callback
    seccion1.appendChild(informacion(tareasDb[0], toggleFormulario));

    dashboard.appendChild(seccion1)

    //footer
    dashboard.appendChild(footer())
    
    return dashboard;
}

document.body.appendChild(dashboard());