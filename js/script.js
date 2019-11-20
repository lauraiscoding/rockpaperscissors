// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



$("#shoot").click(function () {
    var Userchoice = $("#input").val();
    var Computerchoice = Math.floor(Math.random() * 12) + 1;

    $("#userChoice").html($("input").val());

    if (Computerchoice === 1 || Computerchoice === 2 || Computerchoice === 3 || Computerchoice === 4) {
        $("#computerChoice").text("Rock");
        var Computerchoice = "Rock";
    } else if (Computerchoice === 5 || Computerchoice === 6 || Computerchoice === 7 || Computerchoice === 8) {
        $("#computerChoice").text("Paper");
         Computerchoice = "Paper";
    } else {
        $("#computerChoice").text("Scissors");
        Computerchoice = "Scissors";
    }
    console.log(Userchoice);
    console.log(Computerchoice);
    if (Userchoice === "Rock" || Userchoice === "rock" && Computerchoice === "Rock") {
        $("#result").text("Tie!");
    } else if (Userchoice === "Rock"|| Userchoice === "rock" && Computerchoice === "Paper") {
        $("#result").text("Computer Wins!");
    } else if (Userchoice === "Rock"|| Userchoice === "rock" && Computerchoice === "Scissors") {
        $("#result").text("You Win!");
    } else if (Userchoice === "Paper" || Userchoice === "paper"&& Computerchoice === "Rock") {
        $("#result").text("You Win!");
    } else if (Userchoice === "Paper"|| Userchoice === "paper"  && Computerchoice === "Paper") {
        $("#result").text("Tie!");
    } else if (Userchoice === "Paper" || Userchoice === "paper" && Computerchoice === "Scissors") {
        $("#result").text("Computer Wins!");
    } else if (Userchoice === "Scissors" || Userchoice === "scissors" && Computerchoice === "Rock") {
        $("#result").text("Computer Wins!");
    } else if (Userchoice === "Scissors" || Userchoice === "scissors" && Computerchoice === "Paper") {
        $("#result").text("You Win!");
    } else if (Userchoice === "Scissors" || Userchoice === "scissors" && Computerchoice === "Scissors") {
        $("#result").text("Tie!");
    } else {
        $("#result").text("Try Again!");
    }
});
