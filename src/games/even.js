import startAlgoritm from '../index.js';
import generateRandomNumber from '../helpers.js';

const isEven = (number) => number % 2 === 0;

const generateEven = () => {
  const questionEven = generateRandomNumber(100); // max number 99
  const answerEven = isEven(questionEven) ? 'yes' : 'no';
  return [questionEven, answerEven];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => {
  startAlgoritm(description, generateEven);
};

export default runEven;
