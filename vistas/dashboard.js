import { header } from "../modulos/header/headercomponentes.js";
import { footer } from "../modulos/footer/footercomponente.js";


export function dashboard() {

 let seccion = document.createElement('seccion');
  
 //header
seccion.appendChild(header());
seccion.appendChild(footer());


return seccion; 

}

document.body.appendChild(dashboard()); 
