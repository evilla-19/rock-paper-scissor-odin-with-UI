
function computerPlay(){
    options = ['Rock', 'Paper', 'Scissor']
    computer_pick = options[Math.floor(Math.random() * options.length)]
    return(computer_pick)
}


const resultContainer = document.querySelector('.result-container');
const result = document.createElement('p');
resultContainer.appendChild(result)
result.classList.add('result');
result.classList.add('btn');
result.classList.add('btn-info');
result.style.visibility = 'hidden';


function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    // console.log('inside playRound computerSelection:' + computerSelection);
    // console.log('inside playRound playerSelection:' + playerSelection);
    if (playerSelection == computerSelection){
        // console.log('You tie!')
        result.textContent = 'You tie!';
        resultContainer.replaceChild(result, resultContainer.childNodes[0]);
        result.style.visibility = 'visible';
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        // console.log('You Lose! Paper beats Rock')
        result.textContent = 'You Lose! Paper beats Rock';
        resultContainer.replaceChild(result, resultContainer.childNodes[0]);
        result.style.visibility = 'visible';
        computerScore = 1;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        // console.log('You Win! Paper beats Rock')
        result.textContent = 'You Win! Paper beats Rock';
        resultContainer.replaceChild(result, resultContainer.childNodes[0]);
        result.style.visibility = 'visible';
        playerScore = 1;
    } else if (playerSelection == 'Scissor' && computerSelection == 'Rock') {
        // console.log('You Lose! Rock beats Scissor')
        result.textContent = 'You Lose! Rock beats Scissor';
        resultContainer.replaceChild(result, resultContainer.childNodes[0]);
        computerScore = 1;
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissor') {
        // console.log('You Win! Rock beats Scissor')
        result.textContent = 'You Win! Rock beats Scissor';
        resultContainer.replaceChild(result, resultContainer.childNodes[0]); 
        result.style.visibility = 'visible';
        playerScore = 1;
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissor') {
        // console.log('You Lose! Scissor beats Paper')
        result.textContent = 'You Lose! Scissor beats Paper';
        resultContainer.replaceChild(result, resultContainer.childNodes[0]);
        result.style.visibility = 'visible';
        computerScore = 1;
    } else if (playerSelection == 'Scissor' && computerSelection == 'Paper') {
        // console.log('You Win! Scissor beats Paper')
        result.textContent = 'You Win! Scissor beats Paper';
        resultContainer.replaceChild(result, resultContainer.childNodes[0]);
        result.style.visibility = 'visible';
        playerScore = 1;
    }
    return [computerScore, playerScore]
}


const buttons = Array.from(document.querySelectorAll('button'));
const cmp_score = document.querySelector('.cmp-score');
const user_score = document.querySelector('.user-score');

let computerScore = 0;
let playerScore = 0;


buttons.forEach(button => button.addEventListener('click',function(e)
{
    let playerSelection =  button.textContent;
    let computerSelection = computerPlay();
    scores = playRound(playerSelection, computerSelection);
    computerScore = computerScore + scores[0];
    playerScore = playerScore + scores[1];
    cmp_score.innerHTML = computerScore;
    user_score.innerHTML = playerScore;
    if(computerScore == 5 || playerScore == 5)
    {
        // console.log('game over!')
        buttons[0].disabled = true;
        buttons[1].disabled = true;
        buttons[2].disabled = true;
        if (computerScore > playerScore)
        {
            result.textContent = 'You lose to the best of 5!';
            result.classList.replace('btn-info', 'btn-danger')
            resultContainer.replaceChild(result, resultContainer.childNodes[0]);
        } else if (playerScore > computerScore) {
            result.textContent = 'You win to the best of 5!';
            result.classList.replace('btn-info', 'btn-success')
            resultContainer.replaceChild(result, resultContainer.childNodes[0]);
        }
        
    }
}));


const restart = document.querySelector('.btn-sm')

restart.addEventListener('click', function(e){
    window.location.reload()
})