import startEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = generateRandomNumber(1, 50);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrime = () => {
  startEngine(description, generateRound);
};

export default runPrime;
