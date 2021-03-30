// options selections for players
const options = ["Rock","Paper", "Scissors"];
// options mapping with winers
const optionsMappingWiner = {
    Rock : {winer: "Paper"},
    Paper: {winer: "Scissors"},
    Scissors : {winer: "Paper"}
};

console.log(game());

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
        return 'win';
    }
    computerScore +=1;
    return 'lose';
}

function gameRulesWithoutEgality(playerSelection, computerSelection) {

    if(optionsMappingWiner[playerSelection].winer == computerSelection) {
       return false; 
    }
    return true;
}

function capitalize(string)
{
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
}

function resultRound(playerSelection, computerSelection)
{
    switch(playRound(playerSelection, computerSelection))
    {
        case 'win': {
            console.log('You win ! ' + playerSelection + ' beats ' + computerSelection);
            break;
        }
        case 'lose': {
           console.log( 'You lose ! ' + computerSelection + ' beats ' + playerSelection); 
           break;
        }
        default: console.log('Egality');

    }
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;

    for(let cpt = 0; cpt < 5; cpt++) {
        let playerSelection = capitalize(prompt('Choose between Rock, Paper and Scissors to play'));
        if(options.indexOf(playerSelection) < 0) {
            console.log('Invalide value, try egain !');
            return game();
        }
        else return resultRound(playerSelection,computerPlay());
    }
    return (playerScore > computerScore) ? 
        'Congratulations you won ' + playerScore + ' : '+ computerScore :
        'Sorry you lost '+ playerScore + ' : '+ computerScore;
}