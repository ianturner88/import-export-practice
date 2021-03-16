import Dice2 from './2dice';

const newRoll = document.querySelector('[data-roll-dice2]');

const dice2 = new Dice2();

newRoll.addEventListener('click', (e) => {
  console.log('Hello');
  dice2.rollDice();
});
