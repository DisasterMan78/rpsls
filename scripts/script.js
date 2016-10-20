var options = [
        'rock',
        'paper',
        'scissors',
        'lizard',
        'spock'
    ],
    buttons = [];

for (var i = options.length - 1; i >= 0; i--) {
    buttons[options[i]] = document.getElementById(options[i]);
}

var playerChoice = document.getElementById('playerchoice');
//var playerChose = document.getElementsByClassName('option');
//var playerChoose = playerChose.getElementsByTagName('A');
var aiChoice = document.getElementById('computerchoice');
var playAgain = document.getElementById('reload');
var outcome = document.getElementById('outcome');

var computerChoice = Math.random();


function compare(choice1,choice2) {
    if (computerChoice < 0.20){
        computerChoice = "rock";
        aiChoice.classList.add("rock");
    }
    else if(0.21 <= computerChoice <= 0.40){
        computerChoice = "paper";
        aiChoice.classList.add("paper");
    }
    else if(0.41 <= computerChoice <= 0.60){
        computerChoice = "scissors";
        aiChoice.classList.add("scissors");
    }
    else if(0.61 <= computerChoice <= 0.80){
        computerChoice = "lizard";
        aiChoice.classList.add("lizard");
    }
    else{
        computerChoice = "spock";
        aiChoice.classList.add("spock")
    }
    if(choice1===choice2){
        return "It's a tie! Darn!"
    }
    if(choice1==="rock"){
        if(choice2==="scissors") {
            return "Rock smashes Scissors! You Win!";
        }
        if(choice2==="lizard") {
            return "Rock crushes Lizard! You Win!";
        }
        if(choice2==="spock") {
            return "Spock vaporizes Rock! You Lose! :(";
        }
        else {
            return "Paper envelops Rock! You Lose! :(";
        }
    }
    if(choice1==="paper"){
        if(choice2==="scissors") {
            return "Scissors cuts Paper! You Lose! :(";
        }
        else if(choice2==="lizard") {
            return "Lizard eats Paper! You Lose! :(";
        }
        else if(choice2==="spock") {
            return "Paper disproves Spock! You Win!";
        }
        else{
            return "Paper envelops Rock! You Win!";
        }
    }
    if(choice1==="scissors") {
        if(choice2==="paper") {
            return "Scissors cut paper! You Win!";
        }
        else if(choice2==="lizard") {
            return "Scissors decapitate Lizard! You Win!";
        }
        else if(choice2==="spock") {
            return "Spock smashes Scissors! You Lose! :(";
        }
        else{
            return "Rock smashes Scissors! You Lose! :(";
        }
    }
    if(choice1==="lizard"){
        if(choice2==="scissors"){
            return "Scissors decapitate Lizard! You Lose! :(";
        }
        else if(choice2==="paper") {
            return "Lizard eats Paper! You Win!";
        }
        else if(choice2==="spock") {
            return "Lizard poisons Spock! You Win!";
        }
        else{
            return "Rock crushes Lizard! You Lose! :(";
        }
    }
    if(choice1==="spock"){
        if(choice2==="scissors"){
            return "Spock smashes Scissors! You Win!";
        }
        else if(choice2==="lizard") {
            return "Lizard poisons Spock! You Lose! :(";
        }
        else if(choice2==="paper") {
            return "Paper disproves Spock! You Lose! :(";
        }
        else{
            return "Spock vaporizes Rock! You Win!";
        }
    }

};


for (var i = options.length - 1; i >= 0; i--) {
    buttons[options[i]].onclick = function(event) {
        var myChoice = event.target.id;

        playerChoice.classList.add(myChoice);
        compare(myChoice,computerChoice);
        outcome.innerHTML = compare(myChoice,computerChoice);
    }
}

playAgain.onclick = function() {
    location.reload();
}

$(document).ready(function() {
    $('#instructions').click(function() {
        $('.instructions_modal').toggleClass('invisible');
    });

    $('#close').click(function() {
        $('.instructions_modal').toggleClass('invisible');
    });
});


