import { header } from "../modulos/header/headercomponentes.js";
import { footer } from "../modulos/footer/footercomponente.js";
import { informacion } from "../modulos/informacion/informacioncomponente.js";
import { tareas } from "../modulos/tareas/tareascomponente.js";

export function dashboard(){

    let dashboard = document.createElement('section');
    dashboard.className = "dashboard";

    //header
    dashboard.appendChild(header())

    //section
    let seccion1 = document.createElement('section')
    seccion1.className = "seccion-1"
    seccion1.appendChild(tareas())
    seccion1.appendChild(informacion())
    dashboard.appendChild(seccion1)

    //footer
    dashboard.appendChild(footer())
    
    return dashboard;
}
document.body.appendChild(dashboard());