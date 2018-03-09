//морской бой
var isSunk = false;
var guess;
var guesses = 0;
var hits = 0;
var randomLocation = Math.floor(Math.random() * 5);
var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location2 + 1;

while (isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number from 0 to 6): ");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid number!");
    } else {
        guesses++;
        if (guess == location1 || guess == location2 || guess == location3){
            alert("HIT!");
            hits++;
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

/*
the problem here is:
if you hit 3 times in one cell & if this cell is a part of the ship = program responds like you won (3 hits = sanking ship)
that's kinda unacceptable
*/