import startEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => {
  startEngine(description, generateRound);
};

export default runEven;
