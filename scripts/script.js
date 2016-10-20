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

var random = Math.random();
var computerChoice = setComputerChoice(random);


function compare(choice1,choice2) {
console.log(aiChoice, choice2)
    aiChoice.classList.add(choice2);

    if(choice1===choice2){
        return "It's a tie! Darn!";
    }

    switch(choice1){
        case "rock":
            switch(choice2){
                case "scissors":
                    return "Rock smashes Scissors! You Win!";
                    break;
                case "lizard":
                    return "Rock crushes Lizard! You Win!";
                    break;
                case "spock":
                    return "Spock vaporizes Rock! You Lose! :(";
                    break;
                default:
                    return "Paper envelops Rock! You Lose! :(";
                    break;
            }
            break;
        case "paper":
            switch(choice2){
                case "scissors":
                    return "Scissors cuts Paper! You Lose! :(";
                    break;
                case "lizard":
                    return "Lizard eats Paper! You Lose! :(";
                    break;
                case "spock":
                    return "Paper disproves Spock! You Win!";
                    break;
                default:
                    return "Paper envelops Rock! You Win!";
                    break;
            }
        case "scissors":
            switch(choice2){
                case "paper":
                    return "Scissors cut paper! You Win!";
                    break;
                case "lizard":
                    return "Scissors decapitate Lizard! You Win!";
                    break;
                case "spock":
                    return "Spock smashes Scissors! You Lose! :(";
                    break;
                default:
                    return "Rock smashes Scissors! You Lose! :(";
                    break;
            }
            break;
        case "lizard":
            switch(choice2){
                case "scissors":
                    return "Scissors decapitate Lizard! You Lose! :(";
                    break;
                case "paper":
                    return "Lizard eats Paper! You Win!";
                    break;
                case "spock":
                    return "Lizard poisons Spock! You Win!";
                    break;
                default:
                    return "Rock crushes Lizard! You Lose! :(";
                    break;
            }
            break;
        case "spock":
            switch(choice2){
                case "scissors":
                    return "Spock smashes Scissors! You Win!";
                    break;
                case "lizard":
                    return "Lizard poisons Spock! You Lose! :(";
                    break;
                case "paper":
                    return "Paper disproves Spock! You Lose! :(";
                    break;
                default:
                    return "Spock vaporizes Rock! You Win!";
                    break;
            }
            break;
    }

};

function setComputerChoice(random){
    if (random < 0.2){
        computerChoice = "rock";
    }
    else if(random < 0.4){
        computerChoice = "paper";
    }
    else if(random < 0.6){
        computerChoice = "scissors";
    }
    else if(random < 0.8){
        computerChoice = "lizard";
    }
    else{
        computerChoice = "spock";
    }

    return computerChoice;
}


for (var i = options.length - 1; i >= 0; i--) {
    buttons[options[i]].onclick = function(event) {
        var myChoice = event.target.id;

        playerChoice.classList.add(myChoice);
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


