document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const leagueInput = document.getElementById("league");
    const seasonInput = document.getElementById("season");
    const matchdayInput = document.getElementById("matchday");
    const resultsContainer = document.getElementById("match-results");

    function searchFootballAPI() {
        const league = leagueInput.value.trim();
        const season = parseInt(seasonInput.value.trim());
        const matchday = parseInt(matchdayInput.value.trim());

        // Liste der Fehlermeldungen
        let errors = [];

        // Validierung
        const validLeagues = ["bl1", "bl2", "bl3"];
        if (!validLeagues.includes(league)) {
            errors.push("Ungültige Liga. Bitte geben Sie 'bl1', 'bl2' oder 'bl3' ein.");
        }
        if (isNaN(season) || season < 2000 || season > new Date().getFullYear()) {
            errors.push(`Ungültige Saison. Bitte geben Sie ein Jahr zwischen 2000 und ${new Date().getFullYear()} ein.`);
        }
        if (isNaN(matchday) || matchday < 1 || matchday > 34) {
            errors.push("Ungültiger Spieltag. Bitte geben Sie eine Zahl zwischen 1 und 34 ein.");
        }

        // Fehlermeldungen anzeigen
        if (errors.length > 0) {
            resultsContainer.innerHTML = errors.map(error => `<p class="text-danger">${error}</p>`).join("");
            return;
        }

        // API-Aufruf
        const apiUrl = `https://api.openligadb.de/getmatchdata/${league}/${season}/${matchday}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (!data || data.length === 0) {
                    resultsContainer.innerHTML = `<p class="text-warning text-center">Keine Spiele gefunden.</p>`;
                    return;
                }
                displayMatchResults(data);
            })
            .catch(() => {
                resultsContainer.innerHTML = `<p class="text-danger text-center">Fehler bei der Abfrage. Bitte versuchen Sie es später erneut.</p>`;
            });
    }

    function displayMatchResults(data) {
        resultsContainer.innerHTML = ""; // Vorherige Ergebnisse löschen
        data.forEach(match => {
            const endResult = match.matchResults?.find(result => result.resultTypeID === 2);
            const pointsTeam1 = endResult ? endResult.pointsTeam1 : "-";
            const pointsTeam2 = endResult ? endResult.pointsTeam2 : "-";

            const matchCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${match.team1.teamName} vs. ${match.team2.teamName}</h5>
                            <p class="card-text">Datum: ${new Date(match.matchDateTime).toLocaleString()}</p>
                            <p class="card-text">Ergebnis: ${pointsTeam1} - ${pointsTeam2}</p>
                        </div>
                    </div>
                </div>`;
            resultsContainer.innerHTML += matchCard;
        });
    }

    searchButton.addEventListener("click", searchFootballAPI);
});
