import startAlgoritm from '../index.js';
import { generateRandomNumber } from './even.js';

const generateRound = () => {
  const firstNumber = generateRandomNumber(10); // 9 is max number
  let nextNumber = firstNumber;
  const d = generateRandomNumber(10); // arithmetic progression difference
  const numbers = [firstNumber];
  const lengthSeries = 7;
  for (let i = 1; i < lengthSeries; i += 1) {
    nextNumber += d;
    numbers.push(nextNumber);
  }

  const separator = ' ';
  const secretIndex = generateRandomNumber(8); // generate random hidden index position
  const answerProgression = numbers[secretIndex]; // describe right answer

  const questionNumbers = numbers;
  questionNumbers[secretIndex] = '..';

  const questionProgression = questionNumbers.join(separator);
  return [questionProgression, answerProgression];
};

const descriptionProgression = 'What number is missing in the progression?';

// connect variables and functions with index.js
const runProgression = () => {
  startAlgoritm(descriptionProgression, generateRound);
};

export default runProgression;
