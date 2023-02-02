import startAlgoritm from '../index.js';
import generateRandomNumber from '../helpers.js';

const isEven = (number) => number % 2 === 0;

const maxNumber = 100;

const generateEven = () => {
  const questionEven = generateRandomNumber(maxNumber);
  const answerEven = isEven(questionEven) ? 'yes' : 'no';
  return [questionEven, answerEven];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => {
  startAlgoritm(description, generateEven);
};

export default runEven;
