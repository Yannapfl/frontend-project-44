import { gameRules, isGameCondition, runCycleOfWins } from './index.js';

// generate a random number for question
const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
};

const countRightAnswerEven = () => {
  let rightAnswerEven;
  if (generateRandomNumber() % 2 === 0) {
    rightAnswerEven = 'yes';
  } else {
    rightAnswerEven = 'no';
  }
  return rightAnswerEven;
};

// add individual conditions for the Calculator
const Rules = 'Answer "yes" if the number is even, otherwise answer "no".';

// connect variables and functions with index.js
const isEven = () => {
  gameRules(Rules);
  runCycleOfWins(isGameCondition(generateRandomNumber(), countRightAnswerEven()));
};

export default isEven;
