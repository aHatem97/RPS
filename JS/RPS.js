let playerScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;

function playerChoice() {
  let ask = true;

  while (ask) {
    let playerInput = prompt("Please choose between rock, paper or scissors");

    if (playerInput == null) {
      alert("Quitter!!!");
      ask = true;
    } else if (
      playerInput.toLowerCase() === "rock" ||
      playerInput.toLowerCase() === "paper" ||
      playerInput.toLowerCase() === "scissors"
    ) {
      playerInput = playerInput.toLowerCase();
      console.log(`Player Choice: ${playerInput}`);
      ask = false;
      return playerInput;
    } else {
      alert("Error: Please make sure you type either rock, paper or scissors");
      ask = true;
    }
  }
}

function computerChoice() {
  const RNG = Math.floor(Math.random() * 3);

  switch (RNG) {
    case 0:
      console.log("Computer Choice: rock");
      return "rock";

    case 1:
      console.log("Computer Choice: paper");
      return "paper";

    case 2:
      console.log("Computer Choice: scissors");
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert(`Round Draw! ${playerSelection} draws with ${computerSelection}`);
    return draw++;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    alert(`Round Won! ${playerSelection} beats ${computerSelection}!`);
    return playerScore++;
  } else alert(`Round Lost! ${computerSelection} beats ${playerSelection}`);
  return computerScore++;
}

function game() {
  for (let i = 0; i < 5; i++) {
    if (playerScore > 2 || (playerScore >= 2 && draw > 1)) {
      i = 5;
    } else if (computerScore > 2 || (computerScore >= 2 && draw > 1)) {
      i = 5;
    } else {
      let playerSelection = playerChoice();
      let computerSelection = computerChoice();
      playRound(playerSelection, computerSelection);
      round++;
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);
      console.log("-------------------------------------");
      console.log(`End of Round: ${round}`);
      console.log("-------------------------------------");
    }
  }
  if (playerScore > computerScore) {
    alert(
      `Congratulations, Game won! ${playerScore} vs ${computerScore} (${draw} draw)`
    );
  } else if (playerScore < computerScore) {
    alert(
      `Unfortunately, Game Lost! ${playerScore} vs ${computerScore} (${draw} draw)`
    );
  } else {
    alert(
      `Game Ended With A Draw! ${playerScore} vs ${computerScore} (${draw} draw)`
    );
  }
}

game();
