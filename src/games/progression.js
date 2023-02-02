import startAlgoritm from '../index.js';
import generateRandomNumber from '../helpers.js';

const maxNumber = 10;

const getProgression = () => {
  const firstNumber = generateRandomNumber(maxNumber);
  let nextNumber = firstNumber;
  const d = generateRandomNumber(maxNumber); // arithmetic progression difference
  const numbers = [firstNumber];
  const lengthSeries = 7;
  for (let i = 1; i < lengthSeries; i += 1) {
    nextNumber += d;
    numbers.push(nextNumber);
  }
  return numbers;
};

const generateRound = () => {
  const progressions = getProgression();
  const separator = ' ';
  const hiddenIndex = generateRandomNumber(progressions.length);
  const answerProgression = String(progressions[hiddenIndex]);

  const questionNumbers = progressions;
  questionNumbers[hiddenIndex] = '..';

  const questionProgression = questionNumbers.join(separator);
  return [questionProgression, answerProgression];
};

const description = 'What number is missing in the progression?';

const runProgression = () => {
  startAlgoritm(description, generateRound);
};

export default runProgression;
