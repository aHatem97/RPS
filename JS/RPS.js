let draw = 0;
let round = 0;

//function to validate player name
function playerNameValidation() {
  let ask = true;

  while (ask) {
    let playerName = prompt("Please Enter A Name For Player:");

    if (playerName == null) {
      alert("You have to write a player name");
      ask = true;
    } else if (playerName.length > 0 && playerName.length < 10) {
      ask = false;
      return playerName;
    } else {
      alert(
        "Error: Please make sure to enter an appropriate name\nName has to be between 1 and 9 letters."
      );
      ask = true;
    }
  }
}

//function to ask the player if they want to start over again
function gameOver() {
  let ask = true;

  while (ask) {
    let endGameChoice = prompt(
      "Game Over! Would you like to start a new one?\n1) Restart\n2) Close"
    );

    if (endGameChoice == null) {
      alert("Thank you for playing our RPS game! <3");
      ask = false;
    } else if (
      endGameChoice.toLowerCase() === "restart" ||
      endGameChoice === "1"
    ) {
      ask = false;
      startGame();
    } else if (
      endGameChoice.toLowerCase() === "close" ||
      endGameChoice === "2"
    ) {
      alert("Thank you for playing our RPS game! <3");
      ask = false;
      return endGameChoice;
    } else {
      alert(
        "You have to enter a valid choice between '1' , '2', 'Restart' or 'Close' or feel free to close the window from the close button :)"
      );
      ask = true;
    }
  }
}

//function that gets player choice in pve
function pvePlayerChoice() {
  let ask = true;

  while (ask) {
    let playerInput = prompt(
      "Player Turn: Please choose between rock, paper or scissors"
    );

    if (playerInput == null) {
      alert("Quitter!!!");
      ask = true;
    } else if (
      playerInput.toLowerCase() === "rock" ||
      playerInput.toLowerCase() === "paper" ||
      playerInput.toLowerCase() === "scissors"
    ) {
      playerInput = playerInput.toLowerCase();
      console.log(`%cPlayer Choice: ${playerInput}`, `color: green`);
      ask = false;
      return playerInput;
    } else {
      alert("Error: Please make sure you type either rock, paper or scissors");
      ask = true;
    }
  }
}

//function that gets player 1 choice in pvp
function pvpPlayer1Choice(player1Name) {
  let ask = true;

  while (ask) {
    let playerInput = prompt(
      "Player 1: Please Choose Between Rock, Paper or Scissors!"
    );

    if (playerInput == null) {
      alert("Quitter!!!");
      ask = true;
    } else if (
      playerInput.toLowerCase() === "rock" ||
      playerInput.toLowerCase() === "paper" ||
      playerInput.toLowerCase() === "scissors"
    ) {
      playerInput = playerInput.toLowerCase();
      console.log(`%c${player1Name} Choice: ${playerInput}`, `color: green`);
      ask = false;
      return playerInput;
    } else {
      alert("Error: Please make sure you type either rock, paper or scissors");
      ask = true;
    }
  }
}

//function that gets player 2 choice in pvp
function pvpPlayer2Choice(player2Name) {
  let ask = true;

  while (ask) {
    let playerInput = prompt(
      "Player 2: Please Choose Between Rock, Paper or Scissors!"
    );

    if (playerInput == null) {
      alert("Quitter!!!");
      ask = true;
    } else if (
      playerInput.toLowerCase() === "rock" ||
      playerInput.toLowerCase() === "paper" ||
      playerInput.toLowerCase() === "scissors"
    ) {
      playerInput = playerInput.toLowerCase();
      console.log(`%c${player2Name} Choice: ${playerInput}`, `color: red`);
      ask = false;
      return playerInput;
    } else {
      alert("Error: Please make sure you type either rock, paper or scissors");
      ask = true;
    }
  }
}

//function that gets the computer choice
function computerChoice() {
  const RNG = Math.floor(Math.random() * 3);

  switch (RNG) {
    case 0:
      console.log(`%cComputer Choice: rock`, `color: red`);
      return "rock";

    case 1:
      console.log(`%cComputer Choice: paper`, `color: red`);
      return "paper";

    case 2:
      console.log(`%cComputer Choice: scissors`, `color: red`);
      return "scissors";
  }
}

// Function to play against computer
function playAgainstComputer() {
  let playerScore = 0;
  let computerScore = 0;
  alert(
    "Player Vs Computer Rules:\n1) No Quitting!\n2) Don't try to type anything other than 'Rock', 'Paper' or 'Scissors'\n3) Best of 5 wins!"
  );
  for (let i = 0; i < 5; i++) {
    if (playerScore > 2 || (playerScore >= 2 && draw > 1)) {
      i = 5;
    } else if (computerScore > 2 || (computerScore >= 2 && draw > 1)) {
      i = 5;
    } else {
      let playerSelection = pvePlayerChoice();
      let computerSelection = computerChoice();
      if (playerSelection === computerSelection) {
        alert(`Round Draw! ${playerSelection} draws with ${computerSelection}`);
        draw++;
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        alert(`Round Won! ${playerSelection} beats ${computerSelection}!`);
        playerScore++;
      } else {
        alert(`Round Lost! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
      }
      round++;
      console.log(`%cPlayer Score: ${playerScore}`, `color: green`);
      console.log(`%cComputer Score: ${computerScore}`, `color: red`);
      console.log("-------------------------------------");
      console.log(`End of Round: ${round}`);
      console.log("-------------------------------------");
    }
  }
  if (playerScore > computerScore) {
    alert(
      `Congratulations, You won! ${playerScore} vs ${computerScore} (${draw} draw)`
    );
  } else if (playerScore < computerScore) {
    alert(
      `Unfortunately, You Lost! ${playerScore} vs ${computerScore} (${draw} draw)`
    );
  } else {
    alert(
      `Game Ended With A Draw! ${playerScore} vs ${computerScore} (${draw} draw)`
    );
  }
  gameOver();
}

// Function to play against another player
function playAgainstPlayer() {
  let player1Score = 0;
  let player2Score = 0;
  alert(
    "Player Vs Player Rules:\n1) No Cheating!\n2) No Quitting!\n3) Don't try to type anything other than 'Rock', 'Paper' or 'Scissors'\n4) Best of 5 wins!"
  );

  let player1Name = playerNameValidation();
  let player2Name = playerNameValidation();

  for (let i = 0; i < 5; i++) {
    if (player1Score > 2 || (player1Score >= 2 && draw > 1)) {
      i = 5;
    } else if (player2Score > 2 || (player2Score >= 2 && draw > 1)) {
      i = 5;
    } else {
      let player1Selection = pvpPlayer1Choice(player1Name);
      let player2Selection = pvpPlayer2Choice(player2Name);
      if (player1Selection === player2Selection) {
        alert(`Round Draw! ${player1Selection} draws with ${player2Selection}`);
        draw++;
      } else if (
        (player1Selection === "rock" && player2Selection === "scissors") ||
        (player1Selection === "paper" && player2Selection === "rock") ||
        (player1Selection === "scissors" && player2Selection === "paper")
      ) {
        alert(
          `${player1Name} wins! ${player1Selection} beats ${player2Selection}!`
        );
        player1Score++;
      } else {
        alert(
          `${player2Name} wins! ${player2Selection} beats ${player1Selection}`
        );
        player2Score++;
      }
      round++;
      console.log(`%c${player1Name} Score: ${player1Score}`, `color: green`);
      console.log(`%c${player2Name} Score: ${player2Score}`, `color: red`);
      console.log("-------------------------------------");
      console.log(`End of Round: ${round}`);
      console.log("-------------------------------------");
    }
  }
  if (player1Score > player2Score) {
    alert(
      `Congratulations, ${player1Name} wins! ${player1Score} vs ${player2Score} (${draw} draw)`
    );
  } else if (player1Score < player2Score) {
    alert(
      `Congratulations, ${player2Name} wins! ${player2Score} vs ${player1Score} (${draw} draw)`
    );
  } else {
    alert(
      `Game Ended With A Draw! ${player1Score} vs ${player2Score} (${draw} draw)`
    );
  }

  gameOver();
}

// Function to start the game
function startGame() {
  let ask = true;

  while (ask) {
    let playerInput = prompt(
      "Welcome to Rock Paper Scissors game!\nWe have 2 game modes:\n1) Player vs Player\n2) Player vs Computer\nPlease make sure you either select 1 or 2!"
    );

    if (playerInput == null) {
      alert("You have to choose!");
      ask = true;
    } else if (playerInput === "1") {
      playAgainstPlayer();
      ask = false;
      return playerInput;
    } else if (playerInput === "2") {
      playAgainstComputer();
      ask = false;
      return playerInput;
    } else {
      alert("Error: Please make sure to either write 1 or 2!");
      ask = true;
    }
  }
}

startGame();
