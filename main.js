document.getElementById("eightball").addEventListener("click", getResponse);

let output = document.getElementById("eightout");

function getResponse() {
    let input = document.getElementById("eighttext").value.toLowerCase();
    if (input == "") {
        output.innerHTML = "Please ask a question...";
    } else if (input == "does a magic 8 ball actually work?") {
        output.innerHTML = "How dare you doubt me!";
    } else if (input == "is javascript awesome?") {
        output.innerHTML = "Of Course!";
    } else {
        output.innerHTML = randomResponse();
    }
}

function randomResponse() {
    let randNum = Math.random();
    console.log(randNum)
    if (randNum < 0.2) return "Without a Doubt.";
    else if (randNum < 0.4) return "As I see it, yes.";
    else if (randNum < 0.6) return "Concentrate and ask again.";
    else if (randNum < 0.8) return "Don't count on it.";
    else return "Outlook not so good.";
}