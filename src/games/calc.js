import startAlgoritm from '../index.js';
import generateRandomNumber from '../helpers.js';

const operators = ['+', '-', '*'];
const maxNumber = 10;

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return (a + b);
    case '-':
      return (a - b);
    case '*':
      return (a * b);
    default:
      throw new Error(`Unknown order state: '${operators}'!`);
  }
};

const generateCalc = () => {
  const randomAction = generateRandomNumber(operators.length - 1);
  const a = generateRandomNumber(maxNumber);
  const b = generateRandomNumber(maxNumber);

  const questionCalc = `${a} ${operators[randomAction]} ${b}`;
  const answerCalc = String(calculate(a, b, operators[randomAction]));
  return [questionCalc, answerCalc];
};

const description = 'What is the result of the expression?';

const runCalc = () => {
  startAlgoritm(description, generateCalc);
};

export default runCalc;
