# Proyecto1-WebMovil
Integrantes del Proyecto
Sofía Labra
Maite Villalón
Sebastian Soza
Paul Rojas

Descripción
Nuestra aplicación proporciona acceso a información detallada sobre el robot, incluidos sus datos ambientales, historial de interacciones e historial de búsqueda y navegación. Esto permite al usuario comprender mejor el funcionamiento del robot y maximizar su utilidad en diferentes contextos.

link figma: https://www.figma.com/design/Ynx0jxkpPxQCVdKKf2hMCo/Website?node-id=0-1&t=B3ndAtTMrXJB5bIa-1

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
  │   └── info.json
  │   └── package-lock.json
  ├── frontend/
  │   ├── src/
  │   │   ├── app/
  │   │   │   ├── components/
  │   │   │   │   ├── app-routing.module.ts
  │   │   │   ├── paginas/
  │   │   │   │   ├── asesor-deportivo/
  │   │   │   │   │   ├── asesor-deportivo.html
  │   │   │   │   │   ├── asesor-deportivo.scss
  │   │   │   │   │   ├── asesor-deportivo.ts
  │   │   │   │   ├── Chat-deportivas/
  │   │   │   │   │   ├── Chat-deportivas.html
  │   │   │   │   │   ├── Chat-deportivas.scss
  │   │   │   │   │   ├── Chat-deportivas.ts
  │   │   │   │   ├── Chat-preguntas/
  │   │   │   │   │   ├── Chat-preguntas.html
  │   │   │   │   │   ├── Chat-preguntas.scss
  │   │   │   │   │   ├── Chat-preguntas.ts
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
  │   │   │   │   ├── inforobot/
  │   │   │   │   │   ├── inforobot.page.html
  │   │   │   │   │   ├── inforobot.page.scss
  │   │   │   │   │   ├── inforobot.page.ts
  │   │   │   │   ├── inforobot/
  │   │   │   │   │   ├── propiedades.page.html
  │   │   │   │   │   ├── propiedades.page.scss
  │   │   │   │   │   ├── propiedades.page.ts
  │   │   └── environments/
  │   │       ├── environment.ts
  │   └── package.json
  └── README.md



