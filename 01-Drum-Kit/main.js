'use strict';

function playSound(key) {
  const audio = document.querySelector(`audio[data-key=${key}]`);
  const button = document.querySelector(`.--btn[data-key=${key}]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  // Sound will play on key-board key press
  button.classList.add('playing');
  setTimeout(() => {
    button.classList.remove('playing');
  }, 350);

  // Set the immediate transform effect on button click
  button.style.transform = 'scale(1.1)';

  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 350);
}

const buttons = document.querySelectorAll('.--btn');

// Sound will play on button click
buttons.forEach((button) =>
  button.addEventListener('click', function () {
    const key = this.getAttribute('data-key');
    playSound(key);
  })
);

window.addEventListener('keydown', function (e) {
  playSound(e.key);
});
