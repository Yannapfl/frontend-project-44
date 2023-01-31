import startAlgoritm from '../index.js';

const generateRandomNumber = (number) => Math.floor(Math.random() * number);
export { generateRandomNumber };

const isEven = (number) => number % 2 === 0;

const generateConsidencesEven = () => {
  const questionEven = generateRandomNumber(100); // max number 99
  const answerEven = isEven(questionEven) ? 'yes' : 'no';
  return [questionEven, answerEven];
};

const descriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';

// connect variables and functions with index.js
const runEven = () => {
  startAlgoritm(descriptionEven, generateConsidencesEven);
};

export default runEven;
