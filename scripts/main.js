//define varables
const startAgain = document.getElementById("startAgain");
startAgain.style.display='none';
const mainText = document.getElementById("mainText");
let totalScoreDisplay = document.getElementById("totalScore");
let diceImage = document.getElementById("diceImage");
let rollButton = document.getElementById("rollButton");

// Set up a running total to display in total score
let mySum = 0 

//MAIN FUNCTIONALITY - Assign a random value to one roll, conditional statement 
//inc. running total & changing image on dice.

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
// within funciton doing game win/lose conditions: 
if (mySum > 20) { 
    mainText.innerText = "Winner!";
    rollButton.style.display = "none";
    startAgain.style.display='block';
    
 } else if (oneRoll == 1) { 
    mainText.innerText = "You Lose!"
    rollButton.style.display = "none";
    startAgain.style.display='block';    }
});