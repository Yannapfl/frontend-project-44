import startAlgoritm from '../index.js';
import generateRandomNumber from '../helpers.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const maxNumber = 50;

const getPrime = () => {
  const questionPrime = generateRandomNumber(maxNumber);
  const answerPrime = isPrime(questionPrime) ? 'yes' : 'no';
  return [questionPrime, answerPrime];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrime = () => {
  startAlgoritm(description, getPrime);
};

export default runPrime;
