import startAlgoritm from '../index.js';
import generateRandomNumber from '../helpers.js';

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

const maxNumber = 100;

const getGCD = () => {
  const firstNumber = generateRandomNumber(maxNumber);
  const secondNumber = generateRandomNumber(maxNumber);

  const questionGcd = `${firstNumber} ${secondNumber}`;
  const answerGcd = String(countRightAnswerGcd(firstNumber, secondNumber));
  return [questionGcd, answerGcd];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGcd = () => {
  startAlgoritm(description, getGCD);
};

export default runGcd;
