//морской бой
var isSunk = false;
var guess;
var guesses = 0;
var hits = 0;
var location1;
var location2;
var location3;

while (isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number from 0 to 6): ");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid number!");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3){
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3){
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);