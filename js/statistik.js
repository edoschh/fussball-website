document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("load-stats").addEventListener("click", fetchStatistics);

    fetchStatistics();
});

function fetchStatistics() {
    const league = document.getElementById("league-select").value;
    const currentYear = new Date().getFullYear();
    const apiUrl = `https://api.openligadb.de/getbltable/${league}/${currentYear}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (!data || data.length === 0) {
                document.getElementById("statistics-results").innerHTML = `
                    <p class="text-warning text-center">Keine Statistiken gefunden.</p>`;
                return;
            }
            displayStatistics(data);
        })
        .catch(() => {
            document.getElementById("statistics-results").innerHTML = `
                <p class="text-danger text-center">Fehler beim Laden der Statistiken.</p>`;
        });
}

function displayStatistics(data) {
    const container = document.getElementById("statistics-results");
    container.innerHTML = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Platz</th>
                    <th>Team</th>
                    <th>Punkte</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>`;
    const tbody = container.querySelector("tbody");
    data.forEach((team, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${team.teamName}</td>
                <td>${team.points}</td>
            </tr>`;
        tbody.innerHTML += row;
    });
}

