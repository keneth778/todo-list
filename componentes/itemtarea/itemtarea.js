// itemtarea.js
export function tarea(indice, titulo, estado, fechaAs, fechaEn, listaintegrantes = []) {
  const contenedor = document.createElement('div');
  contenedor.className = 'tarea-item';

  // Número
  const divNumero = document.createElement('div');
  divNumero.className = 'tarea-numero';
  divNumero.textContent = indice;

  // Contenido principal: título y fechas
  const cuerpo = document.createElement('div');
  cuerpo.className = 'tarea-cuerpo';

  const tituloEl = document.createElement('h3');
  tituloEl.className = 'tarea-titulo';
  tituloEl.textContent = titulo;

  // Estado (badge)
  const estadoEl = document.createElement('div');
  estadoEl.className = `tarea-estado ${estado.toLowerCase()}`; // por ejemplo "completado"
  estadoEl.textContent = estado;

  // Fechas
  const fechas = document.createElement('div');
  fechas.className = 'tarea-fechas';
  const desde = document.createElement('span');
  desde.className = 'fecha-asignada';
  desde.textContent = fechaAs || '';
  const hasta = document.createElement('span');
  hasta.className = 'fecha-entrega';
  hasta.textContent = fechaEn || '';
  fechas.appendChild(desde);
  fechas.appendChild(document.createTextNode(' · '));
  fechas.appendChild(hasta);

  cuerpo.appendChild(tituloEl);
  cuerpo.appendChild(fechas);

  // Área de íconos (puedes sustituir por tus SVG o imágenes)
  const acciones = document.createElement('div');
  acciones.className = 'tarea-acciones';
  // ejemplo de tres íconos simples
  ['🔍', '✏️', '🗑️'].forEach(icon => {
    const span = document.createElement('span');
    span.className = 'accion-icono';
    span.textContent = icon;
    acciones.appendChild(span);
  });

  // Armado final
  contenedor.appendChild(divNumero);
  contenedor.appendChild(cuerpo);
  contenedor.appendChild(estadoEl);
  contenedor.appendChild(acciones);

  return contenedor;
}
