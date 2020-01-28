//Javascript for rock-paper-scissors

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let gameNumber = 0;
let outcome;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerSpan = document.querySelector('#playerSpan');
const computerSpan = document.querySelector('#computerSpan');
const gameNumberSpan = document.querySelector('#gameNumber');
const playerSelectText = document.querySelector('#playerSelect');
const computerSelectText = document.querySelector('#computerSelect');
const outcomeDiv = document.querySelector('.outcome');
const outcomeText = document.querySelector('.outcome h2');
const finalOutcomeText = document.querySelector('.finalOutcome h1');
const btns = document.querySelectorAll('.buttons button');

function computerPlay(){
    if(Math.random()<0.33){
        return 'rock'
    } else if (Math.random()>0.66){
        return 'paper'
    } else{
        return 'scissors'
    }
}
    
function game(){
    playRound(playerSelection, computerSelection);
    playerSpan.textContent = playerScore;
    computerSpan.textContent = computerScore;
    gameNumberSpan.textContent = gameNumber;
    outcomeText.textContent = outcome;
    if (playerScore === 5){
        finalOutcomeText.textContent = 'VICTORY!';
        disableBtns();
        playAgain();
    } else if (computerScore === 5){
        finalOutcomeText.textContent = 'DEFEAT!';
        disableBtns();
        playAgain();
    }
}

function disableBtns(){
    btns.forEach((btn) => {
        btn.disabled = true;
    });
}

function enableBtns(){
    btns.forEach((btn) => {
        btn.disabled = false;
    });
}

function reset(){
    playerSelection= '';
    computerSelection = '';
    playerScore = 0;
    computerScore = 0;
    gameNumber = '';
    playerSpan.textContent = playerScore;
    computerSpan.textContent = computerScore;
    gameNumberSpan.textContent = gameNumber;
}

function playAgain(){
    const playAgainBtn = document.createElement('button');
    outcome = '';
    playerSelectText.textContent = '';
    computerSelectText.textContent = '';
    outcomeText.textContent = outcome;
    playAgainBtn.textContent = 'Play Again?';
    outcomeDiv.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click',(e)=>{
        enableBtns();
        reset();
        outcomeDiv.removeChild(playAgainBtn);
        finalOutcomeText.textContent = '';
    });
}

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    gameNumber++
    if (playerSelection === 'rock'){
        playerSelectText.textContent ='You played ROCK';
        switch (true){
            case computerSelection === 'rock':
                computerSelectText.textContent ='Computer played ROCK';
                outcome = 'DRAW! How boring!';
                break;
            case computerSelection === 'paper':
                computerSelectText.textContent ='Computer played PAPER';
                computerScore++
                outcome = 'You LOSE! Paper beats Rock!';
                break;
            case computerSelection === 'scissors':
                computerSelectText.textContent ='Computer played SCISSORS';
                playerScore++
                outcome = 'You WIN! Rock beats Scissors!';
                break;
            default:
                console.log('Something went horribly wrong...')
        }
    } else if(playerSelection === 'paper'){
        playerSelectText.textContent ='You played PAPER';
        switch (true){
            case computerSelection === 'rock':
                computerSelectText.textContent ='Computer played ROCK';
                playerScore++
                outcome = 'You WIN! Paper beats Rock!';
                break;
            case computerSelection === 'paper':
                computerSelectText.textContent ='Computer played PAPER';
                outcome = 'DRAW! How boring!';
                break;
            case computerSelection === 'scissors':
                computerSelectText.textContent ='Computer played SCISSORS';
                computerScore++
                outcome = 'You LOSE! Scissors beat Paper!';
                break;
            default:
                console.log('Something went horribly wrong...')
        }
    }else if (playerSelection === 'scissors') {
        playerSelectText.textContent ='You played SCISSORS';
        switch (true){
            case computerSelection === 'rock':
                computerSelectText.textContent ='Computer played ROCK';
                computerScore++
                outcome = 'You LOSE! Rock beats Scissors!';
                break;
            case computerSelection === 'paper':
                computerSelectText.textContent ='Computer played PAPER';
                playerScore++
                outcome = 'You WIN! Scissors beat Paper!';
                break;
            case computerSelection === 'scissors':
                computerSelectText.textContent ='Computer played SCISSORS';
                outcome = 'DRAW! How boring!';
                break;
            default:
                console.log('Something went horribly wrong...');
        }
    }else{
        console.log('Come on dude, you only had to pick rock, paper or scissors! Was that so hard.');
    }
}

rock.addEventListener('click',(e)=>{
    playerSelection = 'rock';
    game();
})

paper.addEventListener('click',(e)=>{
    playerSelection = 'paper';
    game();
})

scissors.addEventListener('click',(e)=>{
    playerSelection = 'scissors'
    game();
})