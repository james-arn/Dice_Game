//define varables
const startAgain = document.getElementById("startAgain");
startAgain.style.visibility='hidden';
const mainText = document.getElementById("mainText");
let totalScoreDisplay = document.getElementById("totalScore");
let diceImage = document.getElementById("diceImage");
let rollButton = document.getElementById("rollButton");

// Set up a running total to display in total score
let mySum = 0 

//ROLL BUTTON - Assign a value to one roll, changing image on dice.
rollButton.addEventListener("click", function () {
 let oneRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
 switch (oneRoll) {
case 1:
    mySum += 1
    diceImage.src="img/Dice 1.svg"
    totalScoreDisplay.innerText = mySum
        break; 
case 2: 
    mySum += 2
    diceImage.src="img/Dice 2.svg"
    totalScoreDisplay.innerText = mySum
        break;
case 3: 
    mySum += 3
    diceImage.src="img/Dice 3.svg"
    totalScoreDisplay.innerText = mySum
        break;
case 4: 
    mySum += 4
    diceImage.src="img/Dice 4.svg"
    totalScoreDisplay.innerText = mySum
        break;
case 5: 
    mySum += 5
    diceImage.src="img/Dice 5.svg"
    totalScoreDisplay.innerText = mySum
        break;
case 6: 
    mySum += 6
    diceImage.src="img/Dice 6.svg"
    totalScoreDisplay.innerText = mySum
        break;
}
if (mySum > 20) { 
    mainText.innerText = "Winner!";
    rollButton.style.display = "none";
    startAgain.style.visibility='visible';
    
 } else if (oneRoll == 1) { 
    mainText.innerText = "You Lose!"
    rollButton.style.display = "none";
    startAgain.style.visibility='visible';
    }
});

//need a random number generator, per click, in an if statement that adds up, but if "1" roll, says you lose. And once reached 20 displays "you win".


//When you hit '1', you lose

//but once you pass '20', you win