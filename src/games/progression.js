import startAlgoritm from './index.js';
import { generateRandomNumber } from './even.js';

const Rules = 'What number is missing in the progression?'; // add individual rules

const generateConsidences = () => {
  const firstNumber = generateRandomNumber(10);
  let nextNumber = firstNumber;
  const d = generateRandomNumber(10); // arithmetic progression difference
  let i = 0;
  const numbersSeries = [firstNumber];
  while (i < 7) {
    nextNumber += d;
    numbersSeries.push(nextNumber);
    i += 1;
  }
  const considences = [];
  const questionSeries = numbersSeries;
  const secretIndex = generateRandomNumber(8); // generate random hidden index position
  considences[1] = numbersSeries[secretIndex]; // describe right answer

  questionSeries[secretIndex] = '..';
  considences[0] = questionSeries; // array for question
  return considences;
};

// connect variables and functions with index.js
const isProgression = () => {
  startAlgoritm(Rules, generateConsidences);
};

export default isProgression;
