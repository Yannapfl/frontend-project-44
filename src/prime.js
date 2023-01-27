import startAlgoritm from './index.js';
import { generateRandomNumber } from './even.js';

// add individual rules
const Rules = 'Answer "yes" if given number is prime. Otherwise answer "no".Answer "yes" if given number is prime. Otherwise answer "no".';

const countRightAnswerPrime = (number) => { // generate right answer
  let result;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
      return result;
    }
  }
  result = 'yes';
  return result;
};

const generateConsidences = () => {
  const considences = [];
  considences[0] = generateRandomNumber(50);
  considences[1] = countRightAnswerPrime(considences[0]);
  return considences;
};

// connect variables and functions with index.js
const isPrime = () => {
  startAlgoritm(Rules, generateConsidences);
};

export default isPrime;
