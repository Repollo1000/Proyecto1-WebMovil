# Proyecto1-WebMovil

Descripción
Esta aplicación móvil está diseñada para interactuar con el robot Ohbot. Captura las conversaciones entre el usuario y el robot, almacena los datos en un archivo JSON.

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/en/) (versión 12 o superior)
- [Ionic CLI](https://ionicframework.com/docs/cli) (versión 6 o superior)
- [Git](https://git-scm.com/)

Instala las dependencias del backend:
- cd backend
-> npm install

Instala las dependencias del frontend:

- cd ../frontend
-> npm install

Ejecución

Backend
Inicia el servidor backend:

- cd backend
-> node server.js
El servidor se ejecutará en http://localhost:3000.

Frontend
Inicia la aplicación Ionic:

- cd frontend
-> ionic serve
La aplicación se ejecutará en http://localhost:8100.

Estructura del Proyecto

project-root/
  ├── backend/
  │   ├── server.js
  │   ├── users.json
  │   └── package.json
  ├── frontend/
  │   ├── src/
  │   │   ├── app/
  │   │   │   ├── components/
  │   │   │   │   ├── app-routing.module.ts
  │   │   │   ├── paginas/
  │   │   │   │   ├── home/
  │   │   │   │   │   ├── home.page.html
  │   │   │   │   │   ├── home.page.scss
  │   │   │   │   │   ├── home.page.ts
  │   │   │   │   ├── inicio-sesion/
  │   │   │   │   │   ├── inicio-sesion.page.html
  │   │   │   │   │   ├── inicio-sesion.page.scss
  │   │   │   │   │   ├── inicio-sesion.page.ts
  │   │   │   │   ├── signup/
  │   │   │   │   │   ├── signup.page.html
  │   │   │   │   │   ├── signup.page.scss
  │   │   │   │   │   ├── signup.page.ts
  │   │   │   │   ├── dashboard/
  │   │   │   │   │   ├── dashboard.page.html
  │   │   │   │   │   ├── dashboard.page.scss
  │   │   │   │   │   ├── dashboard.page.ts
  │   │   │   │   ├── ajuste/
  │   │   │   │   │   ├── ajuste.page.html
  │   │   │   │   │   ├── ajuste.page.scss
  │   │   │   │   │   ├── ajuste.page.ts
  │   │   └── environments/
  │   │       ├── environment.ts
  │   └── package.json
  └── README.md



