document.getElementById("eightball").addEventListener("click", shake8Ball);

function shake8Ball() {
    document.getElementById("eightout").innerHTML = getResponse();
}

function getResponse() {
    let input = document.getElementById("eighttext").value.toLowerCase();
    if (input == "") return "Please ask a question...";
    else if (input == "does a magic 8 ball actually work?") return "How dare you doubt me!";
    else if (input == "is javascript awesome?") return "Of Course!";
    else return randomResponse();
}

function randomResponse() {
    let randNum = Math.random();
    if (randNum < 0.2) return "Without a Doubt.";
    else if (randNum < 0.4) return "As I see it, yes.";
    else if (randNum < 0.6) return "Concentrate and ask again.";
    else if (randNum < 0.8) return "Don't count on it.";
    else return "Outlook not so good.";
}