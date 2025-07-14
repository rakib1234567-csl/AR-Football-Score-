let teams = {};

document.getElementById("matchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let team1 = document.getElementById("team1").value;
    let score1 = parseInt(document.getElementById("score1").value);
    let team2 = document.getElementById("team2").value;
    let score2 = parseInt(document.getElementById("score2").value);

    updateTeam(team1, score1, score2);
    updateTeam(team2, score2, score1);

    updateTable();
});

function updateTeam(team, goalsFor, goalsAgainst) {
    if (!teams[team]) {
        teams[team] = { match: 0, win: 0, draw: 0, loss: 0, goals: 0, points: 0 };
    }

    teams[team].match++;
    teams[team].goals += goalsFor;

    if (goalsFor > goalsAgainst) {
        teams[team].win++;
        teams[team].points += 3;
    } else if (goalsFor === goalsAgainst) {
        teams[team].draw++;
        teams[team].points += 1;
    } else {
        teams[team].loss++;
    }
}

function updateTable() {
    let table = document.getElementById("pointsTable");
    table.innerHTML = `
        <tr>
            <th>দল</th>
            <th>ম্যাচ</th>
            <th>জয়</th>
            <th>ড্র</th>
            <th>হার</th>
            <th>গোল</th>
            <th>পয়েন্ট</th>
        </tr>
    `;

    for (let team in teams) {
        let t = teams[team];
        table.innerHTML += `
            <tr>
                <td>${team}</td>
                <td>${t.match}</td>
                <td>${t.win}</td>
                <td>${t.draw}</td>
                <td>${t.loss}</td>
                <td>${t.goals}</td>
                <td>${t.points}</td>
            </tr>
        `;
    }
}