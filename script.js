// Rock Paper Scissors – 5 round console game
// All logic follows the Odin Project specification.

// Main game function – contains scores, helper functions, and the 5-round loop
function playGame() {
    // Step 4: Declare players' score variables inside playGame (moved from global)
    let humanScore = 0;
    let computerScore = 0;

    // Step 2: Function to randomly return "rock", "paper", or "scissors"
    function getComputerChoice() {
        const randomNumber = Math.random(); // value between 0 and 1 (exclusive of 1)
        if (randomNumber < 1 / 3) {
            return "rock";
        } else if (randomNumber < 2 / 3) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    // Step 3: Function to get human choice via prompt (case-insensitive handled later)
    function getHumanChoice() {
        // Prompt user for input and convert to lowercase for case-insensitivity
        let choice = prompt("Enter rock, paper, or scissors:").toLowerCase().trim();
        // Basic cleaning – assume valid input as per instructions
        return choice;
    }

    // Step 5: Function to play a single round and update scores
    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive (already done in getHumanChoice)
        // Determine winner and increment scores
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            // Human wins
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            // Computer wins (all other valid combinations)
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
        // Log current scores after each round (optional but helpful)
        console.log(`Scores -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    // Step 6: Play 5 rounds
    console.log("🎮 Welcome to Rock Paper Scissors! Best of 5 rounds. 🎮");
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Round ${round} ---`);
        const humanSelection = getHumanChoice();       // get fresh input each round
        const computerSelection = getComputerChoice(); // new random choice
        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
    }

    // After 5 rounds, announce the overall winner
    console.log("\n🏁 GAME OVER 🏁");
    if (humanScore > computerScore) {
        console.log(`🎉 Congratulations! You won the game with ${humanScore} points!`);
    } else if (computerScore > humanScore) {
        console.log(`💻 The computer wins with ${computerScore} points. Better luck next time!`);
    } else {
        console.log(`🤝 It's a tie overall! You both scored ${humanScore}.`);
    }
}

// Start the game when the page loads
playGame();
