// Mostrar/ocultar contraseña
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const icon = this.querySelector("i");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
});

// Validar contraseña al enviar el formulario
document.querySelector("form").addEventListener("submit", function (e) {
    const password = document.getElementById("password").value;
    const isValid = validatePassword(password);
    
    if (!isValid) {
        e.preventDefault();
        alert("La contraseña debe tener al menos 8 caracteres e incluir letras, números y símbolos.");
    }
});

function validatePassword(password) {
    const minLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^a-zA-Z0-9]/.test(password);
    return minLength && hasLetter && hasNumber && hasSymbol;
}

document.querySelector("form").addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value;
  localStorage.setItem("nombreUsuario", nombre);
  // redireccionar (si lo haces manualmente)
  // window.location.href = "crear-comunidad.html";
});