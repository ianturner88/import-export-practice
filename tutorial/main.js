import Dice from './dice';

const newRoll = document.querySelector('[data-roll-dice]');

const dice = new Dice();

newRoll.addEventListener('click', (e) => {
  console.log('Hello');
  dice.rollDice();
});
