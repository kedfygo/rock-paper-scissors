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

    let playerScore = 0;
    let computerScore = 0;
    let gameWinner;


    while (playerScore < 3 && computerScore <3) {
        let computer = computerPlay();

        let player = prompt('Rock, Paper or Scissors???');
        //console.log('Player selected ' + player);
        

        let roundWinner = playRound(player, computer);

        if (roundWinner == 1) {
            playerScore += 1;
        } else if ( roundWinner == 2){
            computerScore +=1;
        }

        if (playerScore == 3) {
            gameWinner = 'Player';
        } else if (computerScore == 3){
            gameWinner = 'Computer';
        }
        }

        alert(gameWinner + ' is the Winner');
        return gameWinner;
      }
