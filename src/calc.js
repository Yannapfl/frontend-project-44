import startAlgoritm from './index.js';
import { generateRandomNumber } from './even.js';

// create the condition for calculator
const generateConsidences = () => {
  const considences = [];
  const randomAction = generateRandomNumber(3) + 1; // random for choosing a sign
  const a = generateRandomNumber(10); // random for choosing adjectives: a, b
  const b = generateRandomNumber(10);

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

  considences[0] = generateCalc();
  considences[1] = countRightAnswerCalc();
  return considences;
};

// add individual conditions for the Calculator
const Rules = 'What is the result of the expression?';

// connect variables and functions with index.js
const isCalc = () => {
  startAlgoritm(Rules, generateConsidences);
};

export default isCalc;
