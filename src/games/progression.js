import startEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const getProgression = (firstNumber, step) => {
  let nextNumber = firstNumber;
  const numbers = [firstNumber];
  const lengthSeries = 7;
  for (let i = 1; i < lengthSeries; i += 1) {
    nextNumber += step;
    numbers.push(nextNumber);
  }
  return numbers;
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const step = generateRandomNumber(0, 10);
  const progressions = getProgression(firstNumber, step);

  const separator = ' ';
  const hiddenIndex = generateRandomNumber(0, progressions.length);
  const answer = String(progressions[hiddenIndex]);

  const questionNumbers = progressions;
  questionNumbers[hiddenIndex] = '..';

  const question = questionNumbers.join(separator);
  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runProgression = () => {
  startEngine(description, generateRound);
};

export default runProgression;
