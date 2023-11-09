'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message, elementQuery) {
  document.querySelector(elementQuery).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number !', '.message');
  }

  // When player win
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number !', '.message');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    displayMessage(secretNumber, '.number');

    if (score > highscore) {
      highscore = score;
      displayMessage(highscore, '.highscore');
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Too high !' : '📉 Too low !',
        '.message'
      );
      score = score - 1;
      displayMessage(score, '.score');
    } else {
      displayMessage('You lost the game !', '.message');
      displayMessage(0, '.score');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...', '.message');
  displayMessage(score, '.score');
  displayMessage('?', '.number');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
