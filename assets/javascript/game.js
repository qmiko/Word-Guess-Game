var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0
var losses = 0
var guessesLeft = 5
var yourGuess = []


//make computer choose random letter
$( document ).ready(function() {
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.onkeyup = function (event) {
    var yourGuess = event.key;
    console.log(yourGuess);
    var letter = event.key.toLowerCase();

}

function wins(){
    if (yourGuess === computerGuess){
        wins++; alert("you win")
    }else{ losses--;
        aler("you lose")
    }
}

// checking computerGuess
console.log(computerGuess)

document.getElementById("guesses-l").innerText = guessesLeft;

//logging yourGuess on user screen
document.onkeyup = function(event){
    var letter = event.key;
    yourGuess.push(letter);
    console.log(yourGuess);
    for(i = 0; i< yourGuess.length; i++){
        $("yours").append(yourGuess[i]);
    }

    document.getElementById("yours").innerHTML = yourGuess;
}

document.addEventListener("onkeyup", function(){
    document.getElementById("demo").innerHTML = "Hello World!";
  });


// document.onkeyup = function(event){
//     var letter = event.key;
//     guessesLeft.push()
// }

});
    
//     if (userGuess === computerGuess){
//         document.querySelector("win")
//     }
// }

