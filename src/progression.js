import startAlgoritm from './index.js';
import { generateRandomNumber } from './even.js';

const Rules = 'What number is missing in the progression?'; // add individual rules

const generateConsidences = () => {
  const firstNumber = generateRandomNumber(10);
  let nextNumber = 0;
  const d = generateRandomNumber(10); // arithmetic progression difference
  const i = 0;
  const numbersSeries = [firstNumber];
  while (i < 7) {
    nextNumber += d;
    numbersSeries.push(nextNumber);
  }
  console.log(numbersSeries);
  const questionSeries = numbersSeries;
  const secretNumber = generateRandomNumber(7);
  console.log(secretNumber);
  questionSeries[secretNumber] === '..';
  const considences = [];
  considences[0] = questionSeries; // array for question
  considences[1] = numbersSeries[secretNumber]; // right answer
  return considences;
};

// connect variables and functions with index.js
const isProgression = () => {
  startAlgoritm(Rules, generateConsidences);
};

export default isProgression;
