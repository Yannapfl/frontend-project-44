import startEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const getGCD = (number1, number2) => {
  // maxGcd is the smallest number of two variables, when number1 % number2 === 0 and contrariwise
  let maxGcd = (number1 > number2) ? number2 : number1;
  while (maxGcd > 0) {
    if ((number1 % maxGcd === 0) && (number2 % maxGcd === 0)) {
      return maxGcd;
    }
    maxGcd -= 1;
  }
  return maxGcd;
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(0, 100);
  const secondNumber = generateRandomNumber(0, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGCD(firstNumber, secondNumber));
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGcd = () => {
  startEngine(description, generateRound);
};

export default runGcd;
