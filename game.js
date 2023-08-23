function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

function playRound(playerChoice, computerChoice) {
	console.log(`Player's choice: ${playerChoice} | Computer's choice: ${computerChoice}`)
	if (playerChoice == computerChoice) {
		console.log("It was a tie! Play again :)");
		return "tie";
	} else if (playerChoice == "rock" && computerChoice == "paper") {
		console.log("Paper beats rock!");
		return "computer";
	} else if (playerChoice == "rock" && computerChoice == "scissors") {
		console.log("Rock beats scissors!");
		return "player";
	} else if (playerChoice == "paper" && computerChoice == "scissors") {
		console.log("Scissors beats paper!");
		return "computer";
	} else if (playerChoice == "paper" && computerChoice == "rock") {
		console.log("Paper beats rock!");
		return "player";
	} else if (playerChoice == "scissors" && computerChoice == "rock") {
		console.log("Rock beats scissors!");
		return "computer";
	} else if (playerChoice == "scissors" && computerChoice == "paper") {
		console.log("Scissors beats paper!");
		return "player";
	}
}

function checkPlayerChoice(playerChoice) {
	if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
		return true;
	} else {
		return false;
	}
}

function getPlayerChoice() {
	let playerChoice;
	do {
		playerChoice = prompt("Would you like to play as rock, paper, or scissors?");
		playerChoice = playerChoice.toLowerCase();
	} while (checkPlayerChoice(playerChoice) == false);

	return playerChoice;

}

function game() {
	let play = true;
	let playerPoints = 0;
	let computerPoints = 0;
	while (play) {
		let computerChoice = playerPieces[getComputerChoice()];
		let playerChoice = getPlayerChoice();
		winner = playRound(playerChoice, computerChoice);
		if (winner == "player") {
			playerPoints++;
		} else if (winner == "computer") {
			computerPoints++;
		}
		console.log(`Current score:
			Player: 	${playerPoints}
			Computer: 	${computerPoints}`);
		if (playerPoints == 5 || computerPoints == 5) {
			if (playerPoints == 5) {
				console.log("Player wins!");
			} else {
				console.log("Computer wins!");
			}
			play = false;
		}
	};
}

let playerPieces = ["rock", "paper", "scissors"];
game();

