import startAlgoritm from '../index.js';
import { generateRandomNumber } from './even.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateConsidencesPrime = () => {
  const questionPrime = generateRandomNumber(50); // max number is 49;
  const answerPrime = isPrime(questionPrime) ? 'yes' : 'no';
  return [questionPrime, answerPrime];
};

const descriptionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// connect variables and functions with index.js
const runPrime = () => {
  startAlgoritm(descriptionPrime, generateConsidencesPrime);
};

export default runPrime;
