# Takenbord-applicatie (PGM-4 Eindopdracht)

Dit project is een takenbord-applicatie ontwikkeld als eindopdracht voor het vak PGM-4 aan Arteveldehogeschool. De applicatie bestaat uit een **React frontend** (met Vite, TanStack Router en Bulma) en een **Strapi backend** (Node.js, SQLite/Postgres).

## Functionaliteiten

- **Projecten beheren:** Bekijk een overzicht van projecten en klik door naar het takenbord van elk project.
- **Takenbord:** Bekijk, filter en navigeer door taken per status (To do, In progress, Ready for review, Done) binnen een project.
- **Backlog:** Bekijk en beheer taken die nog in de backlog staan, met paginatie.
- **Taakdetails:** Bekijk details van een taak en wijzig de status.
- **Nieuwe taak aanmaken:** Voeg een taak toe aan een project, kies status en project.
- **Status wijzigen:** Pas de status van een taak aan via een formulier.
- **Responsief en toegankelijk:** Gebouwd met Bulma voor een moderne, toegankelijke look.

## Technische stack

- **Frontend:**  
  - React 19
  - Vite
  - TanStack Router
  - TanStack React Query
  - Bulma CSS
- **Backend:**  
  - Strapi 5
  - SQLite (standaard) of Postgres
  - JWT-authenticatie via API-token

## Installatie

### Backend (Strapi)

1. Ga naar de `server` map:
   ```sh
   cd server
   ```
2. Installeer dependencies:
   ```sh
   npm install
   ```
3. Start Strapi in development mode:
   ```sh
   npm run develop
   ```
4. Open de Strapi admin op [http://localhost:1337/admin](http://localhost:1337/admin) en maak een admin account aan.
5. Zet de juiste permissies voor de API (Settings → Roles → Public → vink GET/POST/PUT voor tasks, projects, statuses aan).

### Frontend (React)

1. Ga naar de `client` map:
   ```sh
   cd client
   ```
2. Installeer dependencies:
   ```sh
   npm install
   ```
3. Start de frontend:
   ```sh
   npm run dev
   ```
4. Open de app op [http://localhost:5173](http://localhost:5173) (of de poort die Vite toont).


## Belangrijke scripts

- **Backend**
  - `npm run develop` — Start Strapi in development mode
  - `npm run build` — Build de Strapi admin
  - `npm run start` — Start Strapi in productie

- **Frontend**
  - `npm run dev` — Start de React development server
  - `npm run build` — Build de React app
  - `npm run preview` — Preview de productie-build

## API & Omgevingsvariabelen

- De frontend gebruikt een API-token voor authenticatie met Strapi.
- Pas indien nodig de tokens aan in `client/src/constants/constants.js` en `.env` in de backend.

## Extra

- **Styling:** De app gebruikt Bulma voor een moderne, toegankelijke look.
- **Paginatie:** Backlog ondersteunt paginatie.
- **Statusfilter:** Filter taken op status in het board.
- **Error handling:** Foutmeldingen worden getoond bij mislukte API-calls.
- **Online link:** https://ephemeral-seahorse-865045.netlify.app/

## Review Assignment Due Date
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/GeL61fu8)


---

**Auteur:**  
Arne Derese  
PGM-4 Arteveldehogeschool

---
