'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const bodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const numberText = function (text) {
  document.querySelector('.number').style.textContent = text;
};

const scoreText = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Checks if there is no input
  if (!guess) {
    displayMessage('⛔ No number! ⛔');

    // Checks if player wins
  } else if (guess === secretNumber) {
    displayMessage('👍 Correct number 👍');
    bodyColor('#60b347');
    numberWidth('30rem');
    numberText(secretNumber);

    // Checks for new highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Checks if guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(
        guess < secretNumber ? '🔼 Number is low 🔼' : '🔼 Number is high 🔼'
      );
      score--;
      scoreText(score);
    } else {
      displayMessage('😥 Game Over😥');
      bodyColor('#ff0000');
      scoreText(0);
    }
  }
});

// Reset the game with 'Again!' button(highscore remain unchanged)

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  bodyColor('#222');
  numberWidth('15rem');
  numberText('?');
  displayMessage('Start guessing...');
  score = 20;
  scoreText(score);
  document.querySelector('.guess').value = '';
});
