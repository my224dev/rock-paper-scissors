// options selections for playersconst 
const options = ["Rock","Paper", "Scissors"];
// options mapping with winers
const optionsMappingWiner = {
    Rock : {winer: "Paper"},
    Paper: {winer: "Scissors"},
    Scissors : {winer: "Rock"}
};

const messageUi = document.querySelector('.message');
const resultatUi = document.querySelector('.resultat-final');

const playerScoreUi = document.querySelector('.user-score');
const computerScoreUi = document.querySelector('.computer-score');

const btns = Array.from(document.querySelectorAll('.human__btn'));
const allBtns = Array.from(document.querySelectorAll('.btn'));

let playerScore = 0;
let computerScore = 0;

allBtns.forEach(btn => btn.addEventListener('transitionend', removeSelection));
btns.forEach(btn => btn.addEventListener('click', game));

function removeSelection(e)
{
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('selected');
}
// this function retrun randomly either Rock, Paper or Scissors
function computerPlay() {
    const keyRandom = Math.floor((Math.random())*3);

    return options[keyRandom];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'null';
    }
    else if(gameRulesWithoutEgality(playerSelection, computerSelection)) {
        playerScore +=1;
        playerScoreUi.textContent = playerScore;
        
        return 'win';
    }
    computerScore +=1;
    computerScoreUi.textContent = computerScore;
    return 'lose';
}

function gameRulesWithoutEgality(playerSelection, computerSelection) {

    if(optionsMappingWiner[playerSelection].winer == computerSelection) {
       return false; 
    }
    return true;
}

function resultRound(playerSelection, computerSelection)
{
    switch(playRound(playerSelection, computerSelection))
    {
        case 'win': {
            messageUi.textContent = 'Good ! ' + playerSelection + ' beats ' + computerSelection;
            break;
        }
        case 'lose': {
            messageUi.textContent = 'Oh ! ' + computerSelection + ' beats ' + playerSelection; 
            break;
        }
        default: messageUi.textContent = 'Egality';

    }
}
function addStyling(currentBtn) {
    currentBtn.classList.add('selected');
    btnComputer = document.querySelector(`button[data-computer="${computerSelection}"]`);
    btnComputer.classList.add('selected');
}

function game()
{
    resultatUi.textContent = '';
    messageUi.textContent = '';
    playerSelection = this.dataset.id;
    computerSelection = computerPlay();

    addStyling(this);

    resultRound(playerSelection, computerSelection);

    if(playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            resultatUi.textContent = 'Congratulations you won ' + playerScore + ' : '+ computerScore;
            resultatUi.style.color = 'green';
        }
        else {
            resultatUi.textContent = 'Sorry you lost '+ playerScore + ' : '+ computerScore;
            resultatUi.style.color = 'red';
        }
        
        playerScore = 0;
        computerScore = 0;
        playerScoreUi.textContent = 0;
        computerScoreUi.textContent = 0;
    }
}