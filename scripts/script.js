
var rockChoice = document.getElementById('rock_choice');
var paperChoice = document.getElementById('paper_choice');
var scissorsChoice = document.getElementById('scissors_choice');
var lizardChoice = document.getElementById('lizard_choice');
var spockChoice = document.getElementById('spock_choice');
var playerChoice = document.getElementById('playerchoice');
//var playerChose = document.getElementsByClassName('option');
//var playerChoose = playerChose.getElementsByTagName('A');
var aiChoice = document.getElementById('computerchoice');
var playAgain = document.getElementById('reload');
var outcome = document.getElementById('outcome');

var computerChoice = Math.random();
var compare = function(choice1,choice2) {
    if (computerChoice < 0.20){
        computerChoice = "Rock";
        aiChoice.classList.add("Rock");
    }
    else if(0.21 <= computerChoice <= 0.40){
        computerChoice = "Paper";
        aiChoice.classList.add("Paper");
    }
    else if(0.41 <= computerChoice <= 0.60){
        computerChoice = "Scissors";
        aiChoice.classList.add("Scissors");
    }
    else if(0.61 <= computerChoice <= 0.80){
        computerChoice = "Lizard";
        aiChoice.classList.add("Lizard");
    }
    else{
        computerChoice = "Spock";
        aiChoice.classList.add("Spock")
    }
    if(choice1===choice2){
        return "It's a tie! Darn!"
    }
    if(choice1==="Rock"){
        if(choice2==="Scissors") {
            return "Rock smashes Scissors! You Win!";
        }
        if(choice2==="Lizard") {
            return "Rock crushes Lizard! You Win!";
        }
        if(choice2==="Spock") {
            return "Spock vaporizes Rock! You Lose! :(";
        }
        else {
            return "Paper envelops Rock! You Lose! :(";
        }
    }
    if(choice1==="Paper"){
        if(choice2==="Scissors") {
            return "Scissors cuts Paper! You Lose! :(";
        }
        else if(choice2==="Lizard") {
            return "Lizard eats Paper! You Lose! :(";
        }
        else if(choice2==="Spock") {
            return "Paper disproves Spock! You Win!";
        }
        else{
            return "Paper envelops Rock! You Win!";
        }
    }
    if(choice1==="Scissors") {
        if(choice2==="Paper") {
            return "Scissors cut paper! You Win!";
        }
        else if(choice2==="Lizard") {
            return "Scissors decapitate Lizard! You Win!";
        }
        else if(choice2==="Spock") {
            return "Spock smashes Scissors! You Lose! :(";
        }
        else{
            return "Rock smashes Scissors! You Lose! :(";
        }
    }
    if(choice1==="Lizard"){
        if(choice2==="Scissors"){
            return "Scissors decapitate Lizard! You Lose! :(";
        }
        else if(choice2==="Paper") {
            return "Lizard eats Paper! You Win!";
        }
        else if(choice2==="Spock") {
            return "Lizard poisons Spock! You Win!";
        }
        else{
            return "Rock crushes Lizard! You Lose! :(";
        }
    }
    if(choice1==="Spock"){
        if(choice2==="Scissors"){
            return "Spock smashes Scissors! You Win!";
        }
        else if(choice2==="Lizard") {
            return "Lizard poisons Spock! You Lose! :(";
        }
        else if(choice2==="Paper") {
            return "Paper disproves Spock! You Lose! :(";
        }
        else{
            return "Spock vaporizes Rock! You Win!";
        }
    }

};

rockChoice.onclick = function() {
    var myChoice = this.className;
    playerChoice.classList.add(myChoice);
    compare(myChoice,computerChoice);
    outcome.innerHTML = compare(myChoice,computerChoice);
}

paperChoice.onclick = function() {
    var myChoice = this.className;
    playerChoice.classList.add(myChoice);
    compare(myChoice,computerChoice);
    outcome.innerHTML = compare(myChoice,computerChoice);
}

scissorsChoice.onclick = function() {
    var myChoice = this.className;
    playerChoice.classList.add(myChoice);
    compare(myChoice,computerChoice);
    outcome.innerHTML = compare(myChoice,computerChoice);
}

lizardChoice.onclick = function() {
    var myChoice = this.className;
    playerChoice.classList.add(myChoice);
    compare(myChoice,computerChoice);
    outcome.innerHTML = compare(myChoice,computerChoice);
}

spockChoice.onclick = function() {
    var myChoice = this.className;
    playerChoice.classList.add(myChoice);
    compare(myChoice,computerChoice);
    outcome.innerHTML = compare(myChoice,computerChoice);
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

