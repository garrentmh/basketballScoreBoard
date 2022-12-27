let scoreH = 0
let scoreG = 0
let homeScores = document.getElementById("homeScore")
let guestScores = document.getElementById("guestScore")


function add1Home() {
    scoreH += 1
    homeScores.textContent = scoreH
}

function add2Home() {
    scoreH += 2
    homeScores.textContent = scoreH
}

function add3Home() {
    scoreH += 3
    homeScores.textContent = scoreH
}

function add1Guest() {
    scoreG += 1
    guestScores.textContent = scoreG
}

function add2Guest() {
    scoreG += 2
    guestScores.textContent = scoreG
}

function add3Guest() {
    scoreG += 3
    guestScores.textContent = scoreG
}

function reset() {
    scoreH = 0
    homeScores.textContent = scoreH
    scoreG = scoreH
    guestScores.textContent = scoreG
}
