# Edeka-Finder

Dieses Repository enthält das Schulprojekt "Edeka-Finder" — eine Web‑Applikation, die Nutzer*innen dabei helfen soll, in einem EDEKA‑Supermarkt das gewünschte Produkt im Laden (Regal / Regalreihe / Standort) zu finden.

Im Projekt gibt es zwei Hauptteile:

- Backend (Server): Node.js + Express + TypeScript + TypeORM, persisitiert Daten in PostgreSQL. Enthalten im Ordner `server/`.
- Frontend (UI): Astro + React (Vite) mit Tailwind + Ant Design. Enthalten im Ordner `user-Interface/`.

Inhalte dieser README (Deutsch):

1. Worum geht es? (Kurzbeschreibung)
2. Architektur & wichtige Ordner
3. Benötigte Umgebungsvariablen
4. Startanleitung (mit Docker)
5. Startanleitung (ohne Docker, lokal)
6. Troubleshooting & nützliche Befehle
7. Nächste Schritte / Vorschläge

## 1) Worum geht es?

Die App „Edeka‑Finder“ hilft Kund*innen, den Ort eines Produkts innerhalb eines EDEKA‑Supermarktes zu finden (Kategorie, Regal, Regalreihe, u.ä.). Das Backend verwaltet Produkte, Kategorien, Regale (Racks), Regalreihen (Rays) und Sessions/Benutzer. Das Frontend ist eine interaktive Web‑UI, die über eine API mit dem Backend kommuniziert.

## 2) Architektur & wichtige Ordner

- `server/` – Backend (Express + TypeScript)
	- `src/entity/` – TypeORM Entities: `Product`, `ProductCategory`, `Rack`, `Ray`, `User`, `Session`.
	- `src/dataSource.ts` – TypeORM DataSource, Verbindung zur Postgres DB (dotenv‑basiert).
	- `src/index.ts` – Server Einstiegspunkt, initialisiert DB und führt Migrations/Seed‑Skripte aus.
	- `src/Migrations/` – Funktionen zum Anlegen von Default‑Daten (Categories, Racks, Rays, Products).
	- `images/` – Statische Bilder, vom Server unter `/images` serviert.

- `user-Interface/` – Frontend (Astro + React)
	- `src/services/` – Axios‑Services; sie lesen die API‑Basisadresse aus `import.meta.env.PUBLIC_VITE_REACT_API_URL`.

- `docker-compose.yaml` – Definiert zwei Docker Services: `DB` (Postgres) und `adminer`.
- `scripts/up.sh`, `scripts/down.sh` – Hilfsskripte (Bash) um Docker zu starten/stoppen bzw. Prozesse zu beenden (für Unix/WSL; auf Windows Powershell sind Anpassungen nötig).

Wichtig: In `server/src/dataSource.ts` ist `synchronize: true` gesetzt. Das lässt TypeORM beim Start die Tabellen automatisch erstellen/aktualisieren (praktisch für Entwicklung, nicht empfohlen für Produktion).

## 3) Benötigte Umgebungsvariablen

Backend (`server/.env`):

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=edekaFinder
DB_PASSWORD=edekafinder
DB_NAME=EDEKA
PORT=3000
```

Frontend (`user-Interface/.env`):

```
PUBLIC_VITE_REACT_API_URL=http://localhost:3000
```

Hinweis: Die Frontend‑Variable muss mit `PUBLIC_` beginnen, damit Vite/Astro sie im Browser‑Build verfügbar macht.

## 4) Startanleitung — mit Docker (DB + Adminer via docker compose)

Voraussetzungen:
- Docker Desktop (Windows) installiert
- Node.js + npm (für server und frontend)

1) Docker DB und Adminer starten (Projekt‑Root, dort wo `docker-compose.yaml` liegt):

```powershell
docker compose up -d
```

2) Prüfen, ob Postgres bereit ist (Logs beobachten):

```powershell
docker compose logs DB --follow
# oder
docker logs -f EDEKA_DB
```

Warte, bis in den Logs etwa "database system is ready to accept connections" erscheint.

3) Adminer (DB GUI) öffnen: http://localhost:8080

4) Server konfigurieren und starten (lokal, verbindet zur Docker‑DB):

```powershell
cd .\server
npm install
# .env anlegen (siehe Abschnitt 3)
npm run dev
```

Das Dev‑Script nutzt `nodemon src/index.ts`. Beim Start initialisiert der Server TypeORM und führt die Migrations/Seed‑Funktionen aus.

5) Frontend starten:

```powershell
cd ..\user-Interface
npm install
# .env anlegen mit PUBLIC_VITE_REACT_API_URL=http://localhost:3000
npm run dev
```

Standardport für Astro Dev ist in der Regel `4321` — die Konsole zeigt die genaue Adresse an.

Ergebnis: Backend typischerweise unter http://localhost:3000, Frontend unter http://localhost:4321, Adminer unter http://localhost:8080.

## 5) Startanleitung — komplett ohne Docker (lokale Postgres)

Wenn du keinen Docker verwenden möchtest, installiere PostgreSQL lokal (Windows Installer oder via Paketmanager). Erstelle DB + Benutzer entsprechend den Werten in `.env` oder passe `.env` an.

Schritte:

1) PostgreSQL installieren und eine Datenbank `EDEKA` anlegen; Benutzer `edekaFinder` mit Passwort `edekafinder` erstellen (oder andere Werte wählen und in `.env` anpassen).

2) Server starten:

```powershell
cd .\server
npm install
# .env anlegen (siehe Abschnitt 3), z.B. DB_HOST=127.0.0.1
npm run dev
```

3) Frontend starten wie in Abschnitt 4:

```powershell
cd ..\user-Interface
npm install
# PUBLIC_VITE_REACT_API_URL auf http://localhost:3000 setzen
npm run dev
```

Hinweis: Achte darauf, dass der DB‑Benutzer Rechte zum Erstellen der Tabellen hat (TypeORM `synchronize: true` erstellt Tabellen automatisch).

## 6) Troubleshooting & häufige Probleme

- DB-Verbindung schlägt fehl:
	- Prüfe, ob der Postgres‑Container läuft (`docker ps`).
	- Prüfe Logs: `docker compose logs DB` oder `docker logs EDEKA_DB`.
	- Prüfe `server/.env` Credentials.

- Portkonflikte:
	- Server default Port 3000. Falls belegt, ändere `PORT` in `server/.env`.
	- Frontend: Astro dev verwendet normalerweise 4321; falls belegt, zeigt Astro eine Alternative an.

- Seeds / Migrations werden nicht korrekt angelegt:
	- `server/src/index.ts` ruft Seed‑Funktionen mit Timeouts auf. Beobachte Server‑Logs beim Start auf Fehler.

- Adminer kann sich ggf. nicht verbinden: als Host ggf. `host.docker.internal` benutzen (je nach Docker/OS‑Konfiguration) oder `localhost`.

- CORS: Der Server verwendet `cors()`; Standardkonfiguration sollte Anfragen vom Frontend zulassen.

## 7) Nützliche Befehle (PowerShell)

```powershell
# Docker DB + Adminer starten
docker compose up -d

# DB Logs beobachten
docker compose logs DB --follow

# Server starten (dev)
cd .\server
npm install
npm run dev

# Frontend starten
cd ..\user-Interface
npm install
npm run dev
```

## 8) Vorschläge / Nächste Schritte

- (Empfohlen) `server/.env.example` und `user-Interface/.env.example` hinzufügen, damit Neueinsteiger schnell starten können.
- (Optional) Backend und Frontend ebenfalls containerisieren und `docker-compose.yaml` erweitern, damit `docker compose up` alles startet (DB + Adminer + Server + Frontend). Das erfordert Dockerfiles für `server` und `user-Interface`.
- Für Produktion: TypeORM `synchronize: false` setzen und echte Migrationsskripte nutzen.

Wenn du möchtest, kann ich jetzt eine `server/.env.example` und `user-Interface/.env.example` erstellen oder das `docker-compose.yaml` so erweitern, dass Server und Frontend ebenfalls in Containern laufen. Sage mir kurz, welche Option du bevorzugst.

---
_Diese README wurde automatisch mit einer Start‑ und Troubleshooting‑Anleitung ergänzt. Falls du spezifische Anpassungen (Ports, alternative DB‑Credentials, containerisierte Server/Frontend) wünschst, erstelle ich sie gern._

