const lolRunes = ["Precision", "Domination", "Sorcery", "Resolve", "Inspiration"];
let primaryRunes = document.getElementById("primaryRunes");
let secondaryRunes = document.getElementById("secondaryRunes");
let mainRunes = document.getElementById("mainRunes");
let secRunes = document.getElementById("secRunes");


function getRandomIndex() {
    return Math.floor(Math.random() * lolRunes.length);
}


function getRandomRune(exclude) {
    let randomIndex;
    let randomRune;
    do {
        randomIndex = getRandomIndex();
        randomRune = lolRunes[randomIndex];
    } while (randomRune === exclude);
    return randomRune;
}

primaryRunes.onclick = function() {
    let currentSecRune = secRunes.textContent;
    let newMainRune = getRandomRune(currentSecRune);
    mainRunes.textContent = newMainRune;
}

secondaryRunes.onclick = function() {
    let currentMainRune = mainRunes.textContent;
    let newSecRune = getRandomRune(currentMainRune);
    secRunes.textContent = newSecRune;
}
