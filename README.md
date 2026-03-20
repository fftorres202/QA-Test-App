# QA Test App

Aplicacion web frontend de gestion de usuarios y posts construida con React + Vite. Consume la API publica [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Requisitos

- Node.js >= 16
- npm >= 7

## Instalacion

```bash
npm install
```

## Iniciar el proyecto

```bash
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173`.

## Credenciales de acceso
email: test@demo.com password:admin123

---

## Descripcion funcional

### Autenticacion
Pantalla de login con email y contrasena. La sesion se mantiene en `localStorage`.

### Listado de usuarios
Vista principal con nombre, email y ciudad de cada usuario. Incluye estado de carga.
Clic en un usuario navega al detalle.

### Detalle de usuario
Muestra todos los posts del usuario seleccionado. Permite crear, editar y eliminar posts.

### Crear post
Formulario con titulo y contenido. Invoca `POST /posts`.
JSONPlaceholder no persiste los datos realmente.

### Editar post
Boton de edicion en cada post. Habilita formulario en linea. Invoca `PUT /posts/:id`.

### Eliminar post
Boton de eliminacion en cada post. Invoca `DELETE /posts/:id`.

---

## Estructura del proyecto

\`\`\`
src/
├── components/
│   ├── PostForm.jsx
│   └── PostItem.jsx
├── pages/
│   ├── LoginPage.jsx
│   ├── UsersPage.jsx
│   └── UserDetailPage.jsx
├── services/
│   └── api.js
├── App.jsx
├── App.css
└── main.jsx
\`\`\`

## API utilizada

| Metodo | Endpoint            | Descripcion               |
|--------|---------------------|---------------------------|
| GET    | /users              | Listado de usuarios       |
| GET    | /posts?userId=:id   | Posts de un usuario       |
| POST   | /posts              | Crear nuevo post          |
| PUT    | /posts/:id          | Actualizar post existente |
| DELETE | /posts/:id          | Eliminar post             |

## data-testid disponibles

| Selector             | Descripcion                         |
|----------------------|-------------------------------------|
| login-page           | Contenedor pagina de login          |
| login-form           | Formulario de login                 |
| input-email          | Campo de email                      |
| input-password       | Campo de contrasena                 |
| btn-login            | Boton submit del login              |
| login-error          | Mensaje de error del login          |
| users-page           | Contenedor listado de usuarios      |
| loading              | Indicador de carga                  |
| error-message        | Mensaje de error general            |
| user-list            | Lista de usuarios                   |
| user-item-{id}       | Item de usuario                     |
| btn-logout           | Boton cerrar sesion                 |
| user-detail-page     | Contenedor detalle de usuario       |
| btn-back             | Boton volver                        |
| btn-new-post         | Boton nuevo post / cancelar         |
| posts-loading        | Indicador de carga de posts         |
| post-list            | Lista de posts                      |
| post-item-{id}       | Item de post                        |
| post-title-{id}      | Titulo del post                     |
| post-body-{id}       | Cuerpo del post                     |
| btn-edit-{id}        | Boton editar post                   |
| btn-delete-{id}      | Boton eliminar post                 |
| post-form            | Formulario de post                  |
| input-post-title     | Campo titulo del post               |
| input-post-body      | Campo contenido del post            |
| btn-submit-post      | Boton guardar post                  |