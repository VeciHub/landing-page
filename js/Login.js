// Mostrar/ocultar contraseña
document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.textContent = type === "password" ? "👁" : "🙈";
});

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  fetch("https://68270fef397e48c913186ce3.mockapi.io/api/usuarios")
    .then(response => response.json())
    .then(usuarios => {
      const usuarioEncontrado = usuarios.find(usuario =>
        usuario.email === usernameInput && usuario.password === passwordInput
      );

      if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso");
        localStorage.setItem("nombreUsuario", usuarioEncontrado.nombre);
        localStorage.setItem("idUsuario", usuarioEncontrado.id);
        localStorage.setItem("comunidadID", usuarioEncontrado.comunidadID); 
        localStorage.setItem("cargoUsuario", usuarioEncontrado.cargo); // 

        window.location.href = "Menu.html";
      } else {
        alert("Nombre o contraseña incorrectos");
      }
    })
    .catch(error => {
      console.error("Error al conectarse con la API:", error);
      alert("Hubo un problema al verificar tus datos.");
    });
});