function play() {
    var options = ["Rock", "Paper", "Scissors"];
    var userChoice = options[Math.floor(Math.random() * 3)];
    console.log("User choice: " + userChoice);
    var computerChoice = options [Math.floor(Math.random() * 3)];
    console.log("Computer choice: " + computerChoice);
   var userChoiceOne = userChoice === "Rock" && computerChoice === "Scissors";
   var userChoiceTwo = userChoice === "Paper" && computerChoice === "Rock";
   var userChoiceThree = userChoice === "Scissors" && computerChoice === "Paper";

    if (userChoiceOne || userChoiceTwo || userChoiceThree); {
     console.log("User wins!");
    } else {
    console.log("Computer wins!");
    
}
}
play();