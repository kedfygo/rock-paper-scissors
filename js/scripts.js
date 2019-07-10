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
     return result;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let finalMessage;
    let winner;

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();


    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner = 1;    
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        winner = 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        winner = 1;
    } else if (playerSelection == computerSelection) {
        winner = 0;
    } else {
        winner = 2;
    }

    if (winner == 1) {
        finalMessage = 'You won, ' + playerSelection + ' beats ' + computerSelection;
        alert(finalMessage);
        return winner;
    } else if (winner == 0){
        finalMessage = 'Try again';
        alert(finalMessage);
        return winner;
    } else {
        finalMessage = 'You Lose, ' + computerSelection + ' beats ' + playerSelection;
        alert(finalMessage);
        return winner;
    }
  
}

/* Write a NEW function called game(). 
Use the previous function inside of this one to play a 
5 round game that keeps score and reports a winner or 
loser at the end.  */
function game() {
    
    

    
}