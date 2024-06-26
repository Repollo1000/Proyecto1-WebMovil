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
Inicia servidores backend:

- cd backend
-> python server.py
El servidor se ejecutará en (http://127.0.0.1:3000)

- cd backend
-> python controlScripts.py
  
Frontend
Inicia la aplicación Ionic:

- cd frontend
-> ionic serve
La aplicación se ejecutará en http://localhost:4200.

Configuracion base de datos 
En mysql workbench copiar la siguiente estrutura:

USE versa;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  rut VARCHAR(255) NOT NULL UNIQUE,
  region VARCHAR(255) NOT NULL,
  comuna VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user'
);

Nombre base de datos:versa

Password: Versa123.

Consideraciones: La asignacion del rol "admin" se realiza manualmente en la base de datos.

Estructura del Proyecto

project-root/
  ├── backend/
  │   ├── server.py
  │   ├── users.json
  │   └── package.json
  │   └── info.json
  │   └── package-lock.json
  |   |──OHBOT/
  |       └──controlScripts.py
  |       └──AsesorDeportivo.py
  |       └──AsesorEmocional.py
  |       └──cantar.py
  |       └──ReconocimientoFacial.py
  |       └──TutorMatematica.py
  |       └──conversacion_deportiva.json
  |       └──conversacion_deportiva.json
  |       └──conversacion_matematicas.json
  ├── frontend/
  │   ├── src/
  │   │   ├── app/
  │   │   │   ├── components/
  │   │   │   │   ├── app-routing.module.ts
  │   │   │   ├── paginas/
  │   │   │   │   ├── asesor-deportivo/
  │   │   │   │   │   ├── asesor-deportivo.html
  │   │   │   │   │   ├── asesor-deportivo.scss
  │   │   │   │   │   ├── asesor-deportivo.
      │   │   │   ├── inicio-sesion/
  │   │   │   │   │   ├── camara.page.html
  │   │   │   │   │   ├── camara.page.scss
  │   │   │   │   │   ├── camara.page.ts
  │   │   │   │   ├── activar-robot/
  │   │   │   │   │   ├── activar-robot.html
  │   │   │   │   │   ├── activar-robot.scss
  │   │   │   │   │   ├── activar-robot.ts
  │   │   │   │   ├── Chat-deportivas/
  │   │   │   │   │   ├── Chat-deportiva.html
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
  │   │   │   │   ├── admin-dashboard/
  │   │   │   │   │   ├── admin-dashboard.html
  │   │   │   │   │   ├── admin-dashboard.scss
  │   │   │   │   │   ├── admin-dashboard.ts
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
  │   │   │   │   ├── propiedades/
  │   │   │   │   │   ├── propiedades.page.html
  │   │   │   │   │   ├── propiedades.page.scss
  │   │   │   │   │   ├── propiedades.page.ts
  │   │   │   │   ├── chat-matematicas/
  │   │   │   │   │   ├── chat-matematicas.page.html
  │   │   │   │   │   ├── chat-matematicas.page.scss
  │   │   │   │   │   ├── chat-matematicas.page.ts
  │   │   │   │   ├── chat-emocional/
  │   │   │   │   │   ├── chat-emocional.page.html
  │   │   │   │   │   ├── chat-emocional.page.scss
  │   │   │   │   │   ├── chat-emocional.page.ts
  │   │   │   │   ├── page-canto/
  │   │   │   │   │   ├── page-canto.page.html
  │   │   │   │   │   ├── page-canto.page.scss
  │   │   │   │   │   ├── page-canto.page.ts
  │   │   │   │   ├── tutor-matematicas/
  │   │   │   │   │   ├──tutor-matematicas.page.html
  │   │   │   │   │   ├──tutor-matematicas.page.scss
  │   │   │   │   │   ├──tutor-matematicas.page.ts
  │   │   │   │   ├── resolver/
  │   │   │   │   │   ├── resolver.page.html
  │   │   │   │   │   ├── resolver.page.scss
  │   │   │   │   │   ├── resolver.page.ts
  │   │   └── environments/
  │   │       ├── environment.ts
  │   └── package.json
  └── README.md



