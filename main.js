document.getElementById("eightball").addEventListener("click", magicEight);

let ballOutArray = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]

function magicEight() {
    let input = document.getElementById("eighttext").value.toLowerCase();
    let output = document.getElementById("eightout0");
    if (input == "") {
        output.innerHTML = "Please input a question.";
    } else if (input == "hi" || input == "jellobj") {
        output.innerHTML = "Hello!";
    } else if (input == "are you happy?" || input == "are you sad?" || input == "do you love me?") {
        output.innerHTML = "A Magic 8 Ball cannot feel emotion.";
    } else if (input == "what is the answer to life the universe and everything?") {
        output.innerHTML = "42, but what is the question?"
    } else {
        let randNum = Math.round(Math.random() * 20);
        output.innerHTML = ballOutArray[randNum];
    }
}