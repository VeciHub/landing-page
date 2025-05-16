const eventos = [
  {
    tipo: "Evento",
    titulo: "Vacunación Municipal",
    fecha: "20 de abril del 2025",
    descripcion: "Campaña de vacunación gratuita organizada por la municipalidad para niños y adultos mayores.",
    imagen: "img/rectangle1.png"
  },
  {
    tipo: "Evento",
    titulo: "Inauguración Plaza",
    fecha: "28 de abril del 2025",
    descripcion: "Acompáñanos a celebrar la nueva plaza con actividades recreativas y shows en vivo para toda la familia.",
    imagen: "img/rectangle2.png"
  },
  {
    tipo: "Reunión",
    titulo: "Reunión de la comunidad",
    fecha: "28 de abril del 2025",
    descripcion: "Encuentro vecinal para tratar temas de seguridad y mejoras en los servicios del distrito.",
    imagen: "img/rectangle3.png"
  },
  {
    tipo: "Feria",
    titulo: "Feria de Artesanía",
    fecha: "30 de abril del 2025",
    descripcion: "Feria local donde artesanos del vecindario exhiben y venden sus productos hechos a mano.",
    imagen: "img/rectangle4.png"
  }
];

function renderEventos(filtrados = eventos) {
  const container = document.getElementById("eventContainer");
  container.innerHTML = "";

  filtrados.forEach(evento => {
    container.innerHTML += `
      <div class="card">
        <img src="${evento.imagen}" alt="${evento.titulo}">
        <div class="tag">${evento.tipo}</div>
        <div class="card-content">
          <h3>📢 ${evento.titulo}</h3>
          <p class="date">${evento.fecha}</p>
          <p>${evento.descripcion}</p>
        </div>
      </div>
    `;
  });
}

// Render inicial
renderEventos();

// Filtro por tipo
const buttons = document.querySelectorAll('.filter-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tipo = btn.getAttribute('data-filter');
    const filtrados = tipo === "Todos" ? eventos : eventos.filter(e => e.tipo === tipo);
    renderEventos(filtrados);
  });
});

// Botón agregar evento
document.getElementById("addEventBtn").addEventListener("click", () => {
  alert("Aquí puedes agregar un formulario para nuevo evento.");
});

document.getElementById("addEventBtnHeader").addEventListener("click", () => {
  alert("Botón Agregar Evento desde header.");
});

// Búsqueda simple (filtra en vivo por título o tipo)
const searchInput = document.getElementById("headerSearch"); // <-- cambia a headerSearch
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtrados = eventos.filter(e =>
    e.titulo.toLowerCase().includes(query) || e.tipo.toLowerCase().includes(query)
  );

  renderEventos(filtrados);

  // Reset filtro activo a "Todos"
  buttons.forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn[data-filter="Todos"]').classList.add('active');
});

