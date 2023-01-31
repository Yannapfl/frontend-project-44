import startAlgoritm from '../index.js';
import { generateRandomNumber } from './even.js';

const mathOperators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return (a + b);
    case '-':
      return (a - b);
    default:
      return (a * b);
  }
};

const generateConsidencesCalc = () => {
  // random for choosing an index in mathOperators (max number 2)
  const randomAction = generateRandomNumber(3);
  const a = generateRandomNumber(10); // random for choosing adjectives: a, b (max number 9)
  const b = generateRandomNumber(10);

  const questionCalc = `${a} ${mathOperators[randomAction]} ${b}`;
  const answerCalc = calculate(a, b, mathOperators[randomAction]);
  return [questionCalc, answerCalc];
};

const descriptionCalc = 'What is the result of the expression?';

const runCalc = () => {
  startAlgoritm(descriptionCalc, generateConsidencesCalc);
};

export default runCalc;
