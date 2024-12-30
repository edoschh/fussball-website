document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("load-scorers").addEventListener("click", () => {
        const league = document.getElementById("league-select").value;
        const season = new Date().getFullYear();
        displayTopScorers(league, season);
    });

    // Standardmäßig die 1. Bundesliga anzeigen
    const league = document.getElementById("league-select").value;
    const season = new Date().getFullYear();
    displayTopScorers(league, season);
});

// Funktion zum Abrufen der Torschützendaten
async function fetchGoalGetters(leagueShortcut, leagueSeason) {
    const response = await fetch(`https://api.openligadb.de/getgoalgetters/${leagueShortcut}/${leagueSeason}`);
    if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Torschützendaten");
    }
    return await response.json();
}

// Funktion zum Anzeigen der Torschützen
async function displayTopScorers(leagueShortcut, leagueSeason) {
    try {
        const goalGetters = await fetchGoalGetters(leagueShortcut, leagueSeason);

        const container = document.getElementById("rankings-container");
        container.innerHTML = ""; // Vorherige Inhalte löschen

        goalGetters
            .sort((a, b) => b.goalCount - a.goalCount) // Nach Toren sortieren
            .slice(0, 10) // Top 10 Torschützen
            .forEach((scorer, index) => {
                const scorerCard = `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${index + 1}. ${scorer.goalGetterName}</h5>
                                <p class="card-text">Tore: ${scorer.goalCount}</p>
                            </div>
                        </div>
                    </div>`;
                container.innerHTML += scorerCard;
            });
    } catch (error) {
        console.error(error);
        document.getElementById("rankings-container").innerHTML = `
            <p class="text-danger text-center">Fehler beim Laden der Daten. Bitte versuchen Sie es später erneut.</p>`;
    }
}
