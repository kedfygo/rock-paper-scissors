let playerScore = 0;
let computerScore = 0;
let gameWinner;

const container = document.querySelector('#container');
const gameButtons = document.querySelector('#game-buttons');
const scoreDiv = document.querySelector('#score');
const winnerDiv = document.createElement('div');
const computerScoreSpan = document.querySelector('#computer-score');
const playerScoreSpan = document.querySelector('#player-score');

computerScoreSpan.textContent = computerScore;
playerScoreSpan.textContent = playerScore;


// Computer Selection 
function computerPlay(){
    let number = Math.floor(Math.random() * 100);
    let result;
    if (number < 33) {
        result =  'Rock';
    } else if (number < 66) {
        result = 'Paper';
    } else {
        result = 'Scissors';
    }
     //console.log('Computer choose ' + result);
     return result; // Return rock, paper or scissors
}

// Play a single round
function playRound(playerSelection, computerSelection) {
    // your code here!
    let finalMessage;
    let winner; // 0 = Draw, 1 = Player, 2 = computer

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner = 1;    
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        winner = 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        winner = 1;
    } else if (playerSelection == computerSelection) {
        winner = 0;
    } else {
        winner = 2;
    }

    if (winner == 1) {
        finalMessage = 'You won, ' + playerSelection + ' beats ' + computerSelection;
        roundWinner(finalMessage, winner);
        winnerDiv.classList.add('winner-message'); 
        winnerDiv.classList.remove('try-again-message');
        winnerDiv.classList.remove('loser-message');
        return winner;
    } else if (winner == 0){
        finalMessage = 'Try again';
        roundWinner(finalMessage, winner);
        winnerDiv.classList.add('try-again-message');
        winnerDiv.classList.remove('loser-message');
        winnerDiv.classList.remove('winner-message');
        return winner;
    } else {
        finalMessage = 'You Lose, ' + computerSelection + ' beats ' + playerSelection;
        roundWinner(finalMessage, winner);
        winnerDiv.classList.add('loser-message');
        winnerDiv.classList.remove('winner-message');
        winnerDiv.classList.remove('try-again-message');
        return winner;
    }
}

function removeColor() {
    
}

function roundWinner(message, winner){
    winnerDiv.textContent = message;
    
    container.insertBefore(winnerDiv,score);

    if (playerScore < 5 && computerScore < 5) {
        
        if (winner == 1) {
            playerScore += 1;
        } else if ( winner == 2){
            computerScore +=1;
        }

    computerScoreSpan.textContent = computerScore;
    playerScoreSpan.textContent = playerScore;
        
        if (playerScore == 5) {
            gameWinner = 'You\'re the Winner';
            winnerDiv.textContent = gameWinner;
            winnerDiv.classList.toggle('winner-message');
        } else if (computerScore == 5){
            gameWinner = 'Sorry Loser! Computer wins!';
            winnerDiv.textContent = gameWinner;
            winnerDiv.classList.toggle('loser-message');
        }
    }
    return winner;
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;

    computerScoreSpan.textContent = computerScore;
    playerScoreSpan.textContent = playerScore;
    winnerDiv.textContent = '';


    
}

/* Write a NEW function called game(). 
Use the previous function inside of this one to play a 
5 round game that keeps score and reports a winner or 
loser at the end.  */



// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('a');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
// and for each one we add a 'click' listener
button.addEventListener('click', (e) => {
    if (button.id != 'reset') {
        playRound(button.id, computerPlay());
    } else {
        resetScores();
    }
        
});
});

    

    
    
    



