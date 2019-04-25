var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0
var losses = 0
var guessesLeft = 5
var yourGuess = []
//make computer choose random letter


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.onkeyup = function (event) {
    var yourGuess = event.key;
    console.log(yourGuess);
    var letter = event.key.toLowerCase();
}

console.log(computerGuess)

document.getElementById("guesses-l").innerText = guessesLeft;

document.onkeyup = function(event){
    var letter = event.key;
    yourGuess.push(letter);

    for() 

    document.getElementById("yours").innerHTML = letter;
    var
}


    
//     if (userGuess === computerGuess){
//         document.querySelector("win")
//     }
// }

