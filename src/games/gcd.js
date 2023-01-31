import startAlgoritm from '../index.js';
import { generateRandomNumber } from './even.js';

const countRightAnswerGcd = (a, b) => {
  // maxGcd is the smallest number of two variables, when a % b === 0 and contrariwise
  let maxGcd = (a > b) ? b : a;
  while (maxGcd > 0) {
    if ((a % maxGcd === 0) && (b % maxGcd === 0)) {
      return maxGcd;
    }
    maxGcd -= 1;
  }
  return maxGcd;
};

const generateConsidencesGcd = () => {
  const firstNumber = generateRandomNumber(100); // max number is 99
  const secondNumber = generateRandomNumber(100);

  const questionGcd = `${firstNumber} ${secondNumber}`;
  const answerGcd = countRightAnswerGcd(firstNumber, secondNumber);
  return [questionGcd, answerGcd];
};

const descriptionGcd = 'Find the greatest common divisor of given numbers.';

// connect variables and functions with index.js
const runGcd = () => {
  startAlgoritm(descriptionGcd, generateConsidencesGcd);
};

export default runGcd;
