
document.addEventListener("DOMContentLoaded", () => {
    const idUsuario = localStorage.getItem("idUsuario");

    if (!idUsuario) {
        alert("No se encontró la sesión del usuario. Por favor inicia sesión nuevamente.");
        window.location.href = "Login.html";
        return;
    }

    fetch(`https://68270fef397e48c913186ce3.mockapi.io/api/usuarios/${idUsuario}`)
        .then(response => {
            if (!response.ok) throw new Error("Error al obtener los datos del usuario");
            return response.json();
        })
        .then(usuario => {
            // Mostrar los datos en la tarjeta
            document.getElementById("nombreUsuario").textContent = usuario.nombre || '';
            document.getElementById("apellidoUsuario").textContent = usuario.apellido || '';
            document.getElementById("correoUsuario").textContent = usuario.email || '';

            // Cargar datos en el formulario
            document.getElementById("nombre").value = usuario.nombre || '';
            document.getElementById("apellido").value = usuario.apellido || '';
            document.getElementById("email").value = usuario.email || '';
            document.getElementById("telefono").value = usuario.telefono || '';
        })
        .catch(error => {
            console.error(error);
            alert("No se pudieron cargar los datos del usuario.");
        });

    // Guardar cambios
    document.getElementById("guardarBtn").addEventListener("click", function (e) {
        e.preventDefault();

        const datosActualizados = {
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
            body: JSON.stringify(datosActualizados)
        })
            .then(res => {
                if (!res.ok) throw new Error("Error al actualizar los datos");
                return res.json();
            })
            .then(res => {
                alert("Datos actualizados correctamente.");
                location.reload(); // Opcional: Recargar para reflejar los cambios
            })
            .catch(err => {
                console.error(err);
                alert("Error al guardar los cambios.");
            });
    });
});
