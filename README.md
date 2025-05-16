# 🏘️ VeciHub - Gestión de Comunidad Vecinal

Bienvenido a **VeciHub**, una aplicación web pensada para mejorar la comunicación y organización en comunidades vecinales. Aquí podrás registrar usuarios, crear comunidades, y mantener una estructura organizada de subforos y eventos.

---

## 🚀 Tecnologías usadas

- **HTML5**, **CSS3**, **JavaScript (ES6)**
- **[MockAPI](https://mockapi.io/)** – Backend fake para registrar usuarios y comunidades
- **LocalStorage** – Para almacenar temporalmente nombre del usuario y ID de comunidad
- **FontAwesome** – Íconos visuales
- **Google Fonts** – Tipografía `Inter`
- **Netlify** – Despliegue y hosting gratuito

---
## 🌍 Enlace del proyecto en línea

🔗 Puedes ver la aplicación funcionando aquí:  
👉 [https://vecihub.netlify.app/](https://vecihub.netlify.app/)

---

## 🧪 Funcionalidades principales

### 🧍 Registro de usuarios

Formulario ubicado en `register.html`. Al completar el registro:

- Los datos se guardan en MockAPI.
- El nombre del usuario se almacena en `localStorage`.
- El sistema redirige a `crearComunidad.html`.

### 🔐 Inicio de sesión

Formulario en `login.html` que verifica:

- Que el nombre (`nombre`) y contraseña coincidan con un usuario existente en MockAPI.
- Si es válido, redirige a `crearComunidad.html`.

### 🏡 Crear Comunidad

Formulario en `crearComunidad.html`:

- Muestra el nombre del usuario (desde `localStorage`).
- Permite registrar datos de una comunidad (nombre, ubicación, subforos, descripción).
- Al enviarse, MockAPI devuelve un ID único que se muestra en pantalla.
- Redirección a `Inicio.html`.

---

## 🌐 API MockAPI

Se están utilizando dos endpoints:

- **Usuarios:**  
  `https://68270fef397e48c913186ce3.mockapi.io/api/usuarios`

- **Comunidades:**  
  `https://68270fef397e48c913186ce3.mockapi.io/api/comunidad`

Puedes ver los registros creados ingresando al [dashboard de MockAPI](https://mockapi.io/dashboard).

---

##  Autores

Desarrollado por **Luciana Sanchez**   
Desarrollado por **Marllely Arias** 
Desarrollado por **Sebastian Hernandez** 
Proyecto para fines educativos y prototipado rápido.

