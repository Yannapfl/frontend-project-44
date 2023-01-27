import startAlgoritm from './index.js';
import { generateRandomNumber } from './even.js';

const Rules = 'Find the greatest common divisor of given numbers.'; // add individual rules

const countRightAnswerGcd = (a, b) => { // generate right answer
  let maxGcd;
  if (a > b) {
    maxGcd = b;
  } else {
    maxGcd = a;
  }
  while (maxGcd > 0) {
    if ((a % maxGcd === 0) && (b % maxGcd === 0)) {
      return maxGcd;
    }
    maxGcd -= 1;
  }
  return maxGcd;
};

const generateConsidences = () => {
  const considences = [];
  const firstNumber = generateRandomNumber(100);
  const secondNumber = generateRandomNumber(100);
  considences[0] = `${firstNumber} ${secondNumber}`;
  considences[1] = countRightAnswerGcd(firstNumber, secondNumber);
  return considences;
};

// connect variables and functions with index.js
const isGcd = () => {
  startAlgoritm(Rules, generateConsidences);
};

export default isGcd;
