import { gameRules, isGameCondition, runCycleOfWins } from './index.js';
// create the condition for calculator
const randomAction = Math.floor(Math.random() * 3) + 1; // random for choosing a sign
const a = Math.floor(Math.random() * 100); // random for choosing adjectives: a, b
const b = Math.floor(Math.random() * 100);

const generateCalc = () => { // result of random sign for a mathematical expression
  switch (randomAction) {
    case 1:
      return `${a} + ${b}`;
    case 2:
      return `${a} - ${b}`;
    default:
      return `${a} * ${b}`;
  }
};

const countRightAnswerCalc = () => { // result of the mathematical expression
  switch (randomAction) {
    case 1:
      return (a + b);
    case 2:
      return (a - b);
    default:
      return (a * b);
  }
};

// add individual conditions for the Calculator
const Rules = 'What is the result of the expression?';

// connect variables and functions with index.js
const isCalc = () => {
  gameRules(Rules);
  isGameCondition(generateCalc(), countRightAnswerCalc());
  runCycleOfWins();
};

export default isCalc;
