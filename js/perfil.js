document.addEventListener("DOMContentLoaded", () => {
    const idUsuario = localStorage.getItem("idUsuario");

    if (!idUsuario) {
        alert("Usuario no identificado. Inicia sesión primero.");
        window.location.href = "Login.html";
        return;
    }

    // Obtener datos del usuario
    fetch(`https://68270fef397e48c913186ce3.mockapi.io/api/usuarios/${idUsuario}`)
        .then(res => res.json())
        .then(usuario => {
            document.getElementById("nombre").value = usuario.nombre || "";
            document.getElementById("apellido").value = usuario.apellido || "";
            document.getElementById("email").value = usuario.email || "";
            document.getElementById("telefono").value = usuario.telefono || "";

            // Actualizar visual en tarjeta de perfil
            document.getElementById("nombreCompleto").textContent = `${usuario.nombre} ${usuario.apellido}`;
            document.getElementById("correoUsuario").textContent = usuario.email;
        })
        .catch(err => {
            console.error("Error al cargar datos del usuario:", err);
            alert("No se pudieron cargar los datos del perfil.");
        });
});

// Vista previa de imagen
document.getElementById("upload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profileImage").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Guardar cambios del perfil
document.getElementById("guardarBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const idUsuario = localStorage.getItem("idUsuario");

    const data = {
        nombre: document.getElementById("nombre").value.trim(),
        apellido: document.getElementById("apellido").value.trim(),
        email: document.getElementById("email").value.trim(),
        telefono: document.getElementById("telefono").value.trim()
    };

    fetch(`https://68270fef397e48c913186ce3.mockapi.io/api/usuarios/${idUsuario}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(respuesta => {
            alert("Datos actualizados correctamente.");

            // También actualizamos los elementos visibles en la tarjeta
            document.getElementById("nombreCompleto").textContent = `${respuesta.nombre} ${respuesta.apellido}`;
            document.getElementById("correoUsuario").textContent = respuesta.email;
        })
        .catch(error => {
            console.error("Error al actualizar el perfil:", error);
            alert("No se pudieron guardar los cambios.");
        });
});
