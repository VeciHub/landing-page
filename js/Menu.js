let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); // Cambiar el icono del menú
});

// Cambiar el icono del botón cuando el menú se abre/cierra
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

// Cargar contenido en el iframe al hacer clic en los elementos del menú
document.getElementById('inicio').addEventListener('click', function () {
    document.getElementById('content-frame').src = 'Inicio.html'; // Carga Perfil.html dentro del iframe
  });

document.getElementById('perfil').addEventListener('click', function () {
  document.getElementById('content-frame').src = 'Perfil.html'; // Carga Perfil.html dentro del iframe
});

document.getElementById('votaciones').addEventListener('click', function () {
  document.getElementById('content-frame').src = 'votaciones.html'; // Carga Informes.html dentro del iframe
});

document.getElementById('comunidad').addEventListener('click', function () {
  document.getElementById('content-frame').src = 'comunidad0.html'; // Carga Contratos.html dentro del iframe
});

document.getElementById('incidenci').addEventListener('click', function () {
  document.getElementById('content-frame').src = 'Incidencias.html'; // Carga Incidencias.html dentro del iframe
});

document.getElementById('actividades').addEventListener('click', function () {
  document.getElementById('content-frame').src = 'Actividades.html'; // Carga Actividades.html dentro del iframe
});

window.onload = function () {
  document.getElementById("content-frame").src = "Inicio.html"; 
};