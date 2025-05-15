// Handle the form submission
document.getElementById("incidencia-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form values
    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;
    let categoria = document.getElementById("categoria").value;
    let imagen = document.getElementById("imagen").files[0];

    // Validate the form
    if (!titulo || !descripcion || !categoria) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Create FormData to handle file upload
    let formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("categoria", categoria);
    if (imagen) {
        formData.append("imagen", imagen);
    }

    // Simulate form submission (you can replace this part with actual backend integration)
    alert("¡Incidencia reportada con éxito!");

    // Clear the form
    document.getElementById("incidencia-form").reset();
});
