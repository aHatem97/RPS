let playerScore = 0;
let computerScore = 0;
let draw = 0;

function playerChoice() {
  let ask = true;

  while (ask) {
    let playerInput = prompt("Please choose between rock, paper or sciccors");
    console.log("Player Choice: " + playerInput);

    if (playerInput == null) {
      alert("Quitter!!!");
      ask = true;
    } else if (
      playerInput.toLowerCase() === "rock" ||
      playerInput.toLowerCase() === "paper" ||
      playerInput.toLowerCase() === "scissors"
    ) {
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
    return draw++;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  )
    return playerScore++;
  else return computerScore++;
}

function game() {
  for (let i = 0; i < 5; i++) {
    if (playerScore > 2) {
      i = 5;
    } else if (computerScore > 2) {
      i = 5;
    } else {
      let playerSelection = playerChoice();
      let computerSelection = computerChoice();
      playRound(playerSelection, computerSelection);
      console.log("Player score: " + playerScore);
      console.log("Computer score: " + computerScore);
    }
  }
  if (playerScore > computerScore) {
    alert(`You won! ${playerScore} vs ${computerScore} (${draw} draw)`);
  } else if (playerScore < computerScore) {
    alert(`You Lost! ${playerScore} vs ${computerScore} (${draw} draw)`);
  } else {
    alert(`It's a draw! ${playerScore} vs ${computerScore}`);
  }
}

game();
