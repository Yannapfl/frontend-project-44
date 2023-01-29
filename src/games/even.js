import startAlgoritm from '../index.js';

// generate a random number for question
const generateRandomNumber = (number) => Math.floor(Math.random() * number);
export { generateRandomNumber };

const isEven = (number) => number % 2 === 0;

const generateConsidences = () => {
  const considences = [];
  considences[0] = generateRandomNumber(100); // max number 99
  considences[1] = isEven(considences[0]) ? 'yes' : 'no';
  return considences;
};

const descriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';

// connect variables and functions with index.js
const runEven = () => {
  startAlgoritm(descriptionEven, generateConsidences);
};

export default runEven;
