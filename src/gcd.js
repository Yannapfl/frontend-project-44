import startAlgoritm from './index.js';
import { generateRandomNumber } from './even.js';

const Rules = 'Find the greatest common divisor of given numbers.';

const countRightAnswerGcd = (a, b) => {
  let maxGcd;
  let result = 1;
  if (a > b) {
    maxGcd = b;
  } else {
    maxGcd = a;
  }
  while (maxGcd > 0) {
    if ((a % maxGcd === 0) && (b % maxGcd === 0)) {
      result = maxGcd;
    } else {
      maxGcd -= 1;
    }
  }
  return result;
};

const generateConsidences = () => {
  const considences = [];
  const firstNumber = generateRandomNumber(100);
  const secondNumber = generateRandomNumber(200);
  considences[0] = `${firstNumber} ${secondNumber}`;
  considences[1] = countRightAnswerGcd(firstNumber, secondNumber);
  return considences;
};

const isGcd = () => {
  startAlgoritm(Rules, generateConsidences);
};

export default isGcd;
