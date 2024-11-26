'use strict';

/* ===== 🎲 Initialize Game State ===== */
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate a random number between 1 and 20
let score = 20; // Player's starting score
let highscore = 0; // Record the highest score

/* ===== 🛠 Utility Function ===== */
// Function to display a message in the `.message` element
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/* ===== 🎮 Game Logic ===== */
// Event listener for the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Retrieve player's guess
  console.log(guess, typeof guess); // Debugging log

  // 🛑 No Input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // 🎉 Correct Guess
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    // Change styles for winning state
    document.querySelector('body').style.backgroundColor = '#60b347'; // Green background
    document.querySelector('.number').style.width = '30rem'; // Expand the number box

    // Update highscore if applicable
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 📉 Guess is Incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Adjust message for too high or too low guesses
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--; // Decrease score by 1
      document.querySelector('.score').textContent = score; // Update score display
    } else {
      // Player loses the game
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* ===== 🔄 Reset Game ===== */
// Event listener for the "Again" button
document.querySelector('.again').addEventListener('click', function () {
  // Reset game state
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset UI elements
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Reset styles
  document.querySelector('body').style.backgroundColor = '#222'; // Default background
  document.querySelector('.number').style.width = '15rem'; // Default number box size
});
