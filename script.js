//Javascript for rock-paper-scissors

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    if(Math.random()<0.33){
        return 'rock'
    } else if (Math.random()>0.66){
        return 'paper'
    } else{
        return 'scissors'
    }
}



    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    
    rock.addEventListener('click',(e)=>{
        return 'rock'
    })
    paper.addEventListener('click',(e)=>{
        return 'paper'
    })
    scissors.addEventListener('click',(e)=>{
        return 'scissors'
    })


function playRound(playerSelection, computerSelection){
    playerSelection = playerPlay();
    computerSelection = computerPlay();

    if (playerSelection === 'rock'){
        console.log('You played ROCK')
        switch (true){
            case computerSelection === 'rock':
                console.log('Computer played ROCK');
                return 'DRAW! How boring!';
                break;
            case computerSelection === 'paper':
                console.log('Computer played PAPER');
                computerScore++
                return 'You LOSE! Paper beats Rock!';
                break;
            case computerSelection === 'scissors':
                console.log('Computer played SCISSORS');
                playerScore++
                return 'You WIN! Rock beats Scissors!';
                break;
            default:
                console.log('Something went horribly wrong...')
        }
    } else if(playerSelection === 'paper'){
        console.log('You played PAPER')
        switch (true){
            case computerSelection === 'rock':
                console.log('Computer played ROCK');
                playerScore++
                return 'You WIN! Paper beats Rock!';
                break;
            case computerSelection === 'paper':
                console.log('Computer played PAPER');
                return 'DRAW! How boring!';
                break;
            case computerSelection === 'scissors':
                console.log('Computer played SCISSORS');
                computerScore++
                return 'You LOSE! Scissors beat Paper!';
                break;
            default:
                console.log('Something went horribly wrong...')
        }
    }else if (playerSelection === 'scissors') {
        console.log('You played SCISSORS')
        switch (true){
            case computerSelection === 'rock':
                console.log('Computer played ROCK');
                computerScore++
                return 'You LOSE! Rock beats Scissors!';
                break;
            case computerSelection === 'paper':
                console.log('Computer played PAPER');
                playerScore++
                return 'You WIN! Scissors beat Paper!';
                break;
            case computerSelection === 'scissors':
                console.log('Computer played SCISSORS');
                return 'DRAW! How boring!';
                break;
            default:
                console.log('Something went horribly wrong...');
        }
    }else{
        console.log('Come on dude, you only had to pick rock, paper or scissors! Was that so hard.');
    }
}

function game(){
    for (let i = 1; i<=5;i++){
        console.log(' ');
        console.log(`Game ${i}`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player ${playerScore} - Computer ${computerScore}`);
    }
    let outcomeMessage = (playerScore > computerScore) ? 'VICTORY!' :
        (playerScore === computerScore) ? 'DRAW!!' :
        'DEFEAT!';
    console.log(outcomeMessage);
}
game();