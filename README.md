# Fußball-Website


Diese Website richtet sich an Fußballfans, die schnell und einfach auf aktuelle Statistiken und Informationen zugreifen möchten. Mit einer benutzerfreundlichen Oberfläche und Live-Daten aus der OpenLigaDB-API bietet die Website aktuelle Ergebnisse, Tabellenstände und die besten Torschützen aus verschiedenen Ligen.

---

## Systemvoraussetzungen
- Ein moderner Browser (z. B. Chrome, Firefox, Edge)
- Internetverbindung für Live-Daten (Abruf über die OpenLigaDB-API)


## Projektübersicht


### Hauptfunktionen
- **Startseite**: Übersicht über die verfügbaren Funktionen.
- **Fußball-Daten**: Zeigt Ergebnisse für eine spezifische Liga, Saison und Spieltag an.
- **Statistiken**: Anzeige der Tabellenstände von Ligen wie der 1. Bundesliga.
- **Top Torschützen**: Zeigt die besten Torschützen der Liga an.

### Features
- **Dynamische Daten**: Ergebnisse und Statistiken werden in Echtzeit aus der OpenLigaDB-API abgerufen.
- **Responsive Design**: Die Website ist für Desktop- und Mobilgeräte optimiert.
- **Intuitive Navigation**: Einfacher Zugriff auf verschiedene Seiten wie Tabellenstände und Top-Torschützen.


## Verwendete Technologien
- **HTML**: Strukturierung der Seiteninhalte.
- **CSS**: Design und Styling (mit Anpassungen in `styles.css`).
- **Bootstrap**: Responsive Design und vorgefertigte Komponenten.
- **JavaScript**: Abruf und Anzeige dynamischer Inhalte über die Fetch API.
- **GitHub Pages**: Bereitstellung der Website.

## API-Integration
Die Website verwendet die OpenLigaDB-API, um aktuelle Fußballstatistiken bereitzustellen. Die API-Endpunkte werden mithilfe der Fetch API abgefragt, um dynamische Inhalte wie Tabellen und Torschützenlisten anzuzeigen.



## Verzeichnisstruktur

- `fussball-website/`
  - `css/`
    - `styles.css`  # Styling der Seiten
  - `js/`
    - `script.js`   # Funktionen für Fußball-Daten
    - `statistik.js` # Funktionen für Tabellenstatistiken
    - `torschuetzen.js` # Funktionen für Top-Torschützen
  - `index.html`    # Startseite der Website
  - `startseite.html` # Landing Page mit Funktionsübersicht
  - `stats.html`    # Seite mit Tabellenstatistiken
  - `torschuetzen.html` # Seite mit Top-Torschützen
  - `README.md`     # Projektbeschreibung


## Installation und Nutzung


### 1. Installation
1. Klone das Repository:
   ```bash
   git clone https://github.com/edoschh/fussball-website.git
   ```
2. Navigiere in das Verzeichnis:
   ```bash
   cd fussball-website
   ```
3. Öffne `index.html` in deinem Browser, um die Website zu sehen
