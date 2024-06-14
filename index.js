const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const h2 = document.getElementById("h2");
const computer = document.getElementById("computer-choice");
const computerPoints = document.getElementById("computerPoints");
const userPoints = document.getElementById("userPoints");
const round = document.getElementById("round");

let humanScore = 0;
let computerScore = 0;
let rounds = 1;

const play = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const s = Math.floor(Math.random() * play.length);
  const choice = play[s];
  return choice;
}

function getHumanChoice(event) {
  const userChoice = event.target.alt;

  playRound(userChoice);
}

function playRound(userChoice) {
  if (rounds < 6) {
    rounds += 1;
    round.innerHTML = `Round ${rounds}`;

    const computerChoice = getComputerChoice();
    computer.innerHTML = `Computer Choice: ${computerChoice}`;
    if (userChoice === computerChoice) {
      humanScore += 1;
      computerScore += 1;
    } else {
      if (
        (userChoice === "Rock") & (computerChoice == "Scissors") ||
        (userChoice == "Paper") & (computerChoice == "Rock") ||
        (userChoice == "Scissors") & (computerChoice == "Paper")
      ) {
        humanScore += 1;
      } else {
        computerScore += 1;
      }
    }
  }
  userPoints.innerHTML = `User Points: ${humanScore}`;
  computerPoints.innerHTML = `Computer Points: ${computerScore}`;
  if (rounds > 5) {
    round.innerHTML = `Round 5`;
    endGame();
  }
}

function endGame() {
  if (humanScore > computerScore) {
    h2.innerHTML = "Game Over! You have won the Game!";
  } else if (computerScore > humanScore) {
    h2.innerHTML = "Game Over! Computer have won the Game!";
  } else {
    h2.innerHTML = "Game Over! It's a Draw!";
  }
}

function resetGame() {
  h2.innerHTML = "Choose one from below:";

  humanScore = 0;
  computerScore = 0;
  rounds = 1;
  round.innerHTML = `Round ${rounds}`;
  userPoints.innerHTML = `User Points: ${humanScore}`;
  computerPoints.innerHTML = `Computer Points: ${computerScore}`;
  computer.innerHTML = "Computer Choice:";

  rock.addEventListener("click", getHumanChoice);
  paper.addEventListener("click", getHumanChoice);
  scissors.addEventListener("click", getHumanChoice);
}

function startGame() {
  h2.innerHTML = "Choose one from below:";

  humanScore = 0;
  computerScore = 0;
  userPoints.innerHTML = `User Points: ${humanScore}`;
  computerPoints.innerHTML = `Computer Points: ${computerScore}`;
  computer.innerHTML = "Computer Choice:";
  rounds = 1;
  round.innerHTML = `Round ${rounds}`;

  rock.addEventListener("click", getHumanChoice);
  paper.addEventListener("click", getHumanChoice);
  scissors.addEventListener("click", getHumanChoice);
}

start.addEventListener("click", startGame);
reset.addEventListener("click", resetGame);
