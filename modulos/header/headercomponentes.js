export function header(){
    let header = document.createElement('header');

    // Título
    let h1 = document.createElement('h1');
    h1.innerHTML = '<span style="margin-right: 0.5rem;">📝</span><strong>Todo-List</strong>';
    header.appendChild(h1);

    // Div tareas (centrado)
    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas";

    let spanTitulo = document.createElement('span');
    spanTitulo.innerText = "Pendientes";
    spanTitulo.style.marginRight = "0.5rem";
    spanTitulo.style.fontSize = "0.9rem";
    spanTitulo.style.fontWeight = "500";

    let contador = document.createElement('span');
    contador.innerText = "5";
    contador.className = "contador-tareas";

    divTareas.appendChild(spanTitulo);
    divTareas.appendChild(contador);

    header.appendChild(divTareas);

    // Usuario
    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-Logo-usuario"
    divLogoUsuario.innerText = "🥸"
    header.appendChild(divLogoUsuario);

    return header;
}
