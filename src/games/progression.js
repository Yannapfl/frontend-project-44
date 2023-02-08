import startEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const getProgression = (firstNumber, step, lengthSeries) => {
  const numbers = [firstNumber];
  for (let i = 1; i < lengthSeries; i += 1) {
    numbers.push(firstNumber + (step * i));
  }
  return numbers;
};

const generateRound = () => {
  const firstNumber = generateRandomNumber(0, 10);
  const step = generateRandomNumber(0, 10);
  const progressions = getProgression(firstNumber, step, 7);

  const separator = ' ';
  const hiddenIndex = generateRandomNumber(0, progressions.length);
  const answer = String(progressions[hiddenIndex]);

  progressions[hiddenIndex] = '..';

  const question = progressions.join(separator);
  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runProgression = () => {
  startEngine(description, generateRound);
};

export default runProgression;
