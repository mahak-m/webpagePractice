var dice = (Math.floor(Math.random() * 6 + 1));
//document.write(dice); //(to check if Math.random() is working)

var dice2 = (Math.floor(Math.random() * 6 + 1));
//document.write(dice2); //(to check if Math.random() is working)

var dice3 = (Math.floor(Math.random() * 6 + 1));
//document.write(dice3); //(to check if Math.random() is working)

var name = prompt("Welcome to VIRTUAL DICE. What is your name?");

var diceNumber = prompt("How many dice would you like to roll? You can choose up to 3.");

document.getElementById("heading").innerHTML = " HELLO " + name + "!";
document.getElementById("dice").innerHTML = " You chose to roll " + diceNumber + " dice.";

if (diceNumber == "one" || diceNumber == "One" || diceNumber == "1" || diceNumber == "ONE") {
    alert("ROLLING...");
    document.getElementById("one").innerHTML = " DICE ONE: " + dice;
} else {
    if (diceNumber == "two" || diceNumber == "Two" || diceNumber == "2" || diceNumber == "TWO") {
        alert("ROLLING...");
        document.getElementById("one").innerHTML = " DICE ONE: " + dice;
        document.getElementById("two").innerHTML = " DICE TWO: " + dice2;
    } else {
        if (diceNumber == "three" || diceNumber == "Three" || diceNumber == "3" || diceNumber == "THREE") {
            alert("ROLLING...");
            document.getElementById("one").innerHTML = " DICE ONE: " + dice;
            document.getElementById("two").innerHTML = " DICE TWO: " + dice2;
            document.getElementById("three").innerHTML = " DICE THREE: " + dice3;

        } else {
            alert("Error. You must choose a number between 1 and 3.");
            document.getElementById("error").innerHTML = "Next time enter a number BETWEEN 1-3.";
        }
    }
}

