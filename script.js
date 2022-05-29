let playerScore = 0;
let computerScore = 0;
const roundResult = document.querySelector(".round-result");
const roundResultChoices = document.querySelector(".round-result-choices");
const playerRunningScore = document.querySelector(".player-score");
const computerRunningScore = document.querySelector(".computer-score");
const finalResultModal = document.querySelector(".final-result-modal");

const computerSelection = () => {
  const options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const playRound = (playersChoice, computersChoice) => {
  playersChoice = playersChoice.toLowerCase();
  let result;

  if (playersChoice == computersChoice) {
    let resultChoices =
      playersChoice.substring(0, 1).toUpperCase() + playersChoice.substring(1);
    result = ["It's a Tie!⭕", `${resultChoices} ties ${resultChoices}`];
  } else if (playersChoice == "rock" && computersChoice == "paper") {
    result = ["You Lose!☹️", "Paper beats Rock"];
    computerScore++;
  } else if (playersChoice == "rock" && computersChoice == "scissors") {
    result = ["You Win!🎉", "Rock beats Scissors"];
    playerScore++;
  } else if (playersChoice == "paper" && computersChoice == "rock") {
    result = ["You Win!🎉", "Paper beats Rock"];
    playerScore++;
  } else if (playersChoice == "paper" && computersChoice == "scissors") {
    result = ["You Lose!☹️", "Scissors beats Paper"];
    computerScore++;
  } else if (playersChoice == "scissors" && computersChoice == "rock") {
    result = ["You Lose!☹️", "Rock beats Scissors"];
    computerScore++;
  } else if (playersChoice == "scissors" && computersChoice == "paper") {
    result = ["You Win!🎉", "Scissors beats Paper"];
    playerScore++;
  }

  return result;
};

const playAgain = () => {
  playerScore = 0;
  computerScore = 0;
  roundResult.textContent = "Click one to make a move";
  roundResultChoices.textContent = "First to score 5 points wins";
  playerRunningScore.textContent = `Player: `;
  computerRunningScore.textContent = `Computer: `;
  finalResultModal.style.display = "none";
};

const playerSelection = (playersChoice) => {
  let result = playRound(playersChoice, computerSelection());
  roundResult.textContent = result[0];
  roundResult.style.color = result[0] === "You Win!🎉" ? "green" : "red";
  roundResultChoices.textContent = result[1];
  playerRunningScore.textContent = `Player: ${playerScore}`;
  computerRunningScore.textContent = `Computer: ${computerScore}`;

  if (computerScore >= 5 || playerScore >= 5) {
    const finalResult = document.querySelector(".final-result");
    if (playerScore > computerScore) {
      finalResult.textContent = "You Won!🎉";
      finalResult.style.color = "gold";
    } else {
      finalResult.textContent = "You Lost!☹️";
      finalResult.style.color = "red";
    }
    finalResultModal.style.display = "block";
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key == "a") playerSelection("rock");
  if (e.key == "s") playerSelection("paper");
  if (e.key == "d") playerSelection("scissors");
  if (e.key == " ") playAgain();
});
