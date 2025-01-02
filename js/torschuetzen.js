document.addEventListener("DOMContentLoaded", () => {
    // Event-Listener für den Button
    document.getElementById("load-scorers").addEventListener("click", fetchTopScorers);

    // Standardmäßig die 1. Bundesliga laden
    fetchTopScorers();
});

function fetchTopScorers() {
    const league = document.getElementById("league-select").value; // Ausgewählte Liga
    const year = 2024; // Aktuelle Saison

    // API-URL für Torschützen
    const apiUrlScorers = `https://api.openligadb.de/getgoalgetters/${league}/${year}`;

    // Nur Torschützen laden und anzeigen
    fetch(apiUrlScorers)
        .then(response => response.json())
        .then(scorers => {
            displayTopScorers(scorers);
        })
        .catch(error => {
            console.error("Fehler bei der API-Abfrage:", error);
            document.getElementById("rankings-container").innerHTML = `
                <p class="text-danger text-center">Fehler beim Laden der Torschützen.</p>`;
        });
}

function displayTopScorers(scorers) {
    const container = document.getElementById("rankings-container");
    container.innerHTML = "<h3 class='text-center'>Top 10 Torschützen</h3>";

    // Sortiere die Torschützen nach Toranzahl (absteigend) und zeige nur die Top 10
    const sortedScorers = scorers.sort((a, b) => b.goalCount - a.goalCount).slice(0, 10);

    sortedScorers.forEach((scorer, index) => {
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
}
