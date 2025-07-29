export function dashboard() {

 let seccion = document.createElement('seccion');
    let h1 = document.createElement ('h1');
    h1.innerText = "hola mundo"
    seccion.appendChild(h1);

return seccion; 

}

document.body.appendChild(dashboard()); 