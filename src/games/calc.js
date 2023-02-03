import startEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const operators = ['+', '-', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      throw new Error(`Unknown order state: '${operators}'!`);
  }
};

const generateRound = () => {
  const randomAction = generateRandomNumber(0, operators.length - 1);
  const number1 = generateRandomNumber(0, 100);
  const number2 = generateRandomNumber(0, 100);

  const question = `${number1} ${operators[randomAction]} ${number2}`;
  const answer = String(calculate(number1, number2, operators[randomAction]));
  return [question, answer];
};

const description = 'What is the result of the expression?';

const runCalc = () => {
  startEngine(description, generateRound);
};

export default runCalc;
