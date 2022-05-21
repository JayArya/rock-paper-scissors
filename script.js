const computerPlay = () => {
  const options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  let result = "";

  if (playerSelection == computerSelection) result = "It's a Tie!";
  else if (playerSelection == "rock" && computerSelection == "paper")
    result = "You Lose! Paper beats Rock";
  else if (playerSelection == "rock" && computerSelection == "scissors")
    result = "You Win! Rock beats Scissors";
  else if (playerSelection == "paper" && computerSelection == "rock")
    result = "You Win! Paper beats Rock";
  else if (playerSelection == "paper" && computerSelection == "scissors")
    result = "You Lose! Scissors beats Paper";
  else if (playerSelection == "scissors" && computerSelection == "rock")
    result = "You Lose! Rock beats Scissors";
  else if (playerSelection == "scissors" && computerSelection == "paper")
    result = "You Win! Scissors beats Paper";

  return result;
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt(
      "What's your choice? Enter - Rock, Paper or Scissors"
    );
    let computerSelection = computerPlay();
    let result = `Round ${i + 1}: ${playRound(
      playerSelection,
      computerSelection
    )}`;
    console.log(result);
  }
};

game();
